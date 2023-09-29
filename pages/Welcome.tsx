import {useState, useEffect} from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Platform, Vibration } from 'react-native'
import Swiper from 'react-native-swiper'
import { SimpleLineIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function Welcome () {

  const navigation = useNavigation()
  const [index, setIndex] = useState(0) 
  console.log(JSON.stringify(Platform))
  console.log(uuidv4())
  
  useEffect(() => {
    console.log(index)
    if (index > 0 ) {
      if ( Platform.OS === 'ios') {
        Vibration.vibrate(1000)
      }else {
        Vibration.vibrate(500)
      }
    }
  }, [index])

  return (
      <>
        <StatusBar hidden={true} />
        <Swiper
         style={styles.swipeContainer} 
         showsButtons={true}
         onIndexChanged={(index) => setIndex(index)}
         loadMinimal={true}
         loadMinimalSize={3}
         > 
            <View style={styles.box}>
              <SimpleLineIcons name="basket" size={135} color={'#4287f5'} />
            </View>
            <View style={styles.box}>
              <SimpleLineIcons name="like" size={135} color={'#4287f5'} />
            </View>
            <View style={styles.box}>
              <SimpleLineIcons name="home" size={135} color={'#4287f5'} />
              <View style={{margin: 20}}>
              <TouchableOpacity onPress={() => navigation.replace("LoginStack")}>
                <View style={{ backgroundColor: '#4287f5', width: '100%', borderRadius: 10, padding: 10,   }}>
                  <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffffff' }}>Goto App</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
        </Swiper>
      </>
  )
}

const styles = StyleSheet.create({
  swipeContainer: {
    
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  }
})