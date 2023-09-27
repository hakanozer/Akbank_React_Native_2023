import { useEffect, useState } from 'react'
import  { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IProduct } from '../models/IProducts';
import BackBtn from '../components/BackBtn';
import { backgroundColor, paddinSpace, statusBarHeight } from '../utils/theme';
import { singleProduct } from '../utils/service';

export default function ProductDetail() {

  const [proItem, setProItem] = useState<IProduct>()
  const [bigImage, setBigImage] = useState('')
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    if ( route.params.item ) {
      const item = route.params.item as IProduct
      singleProduct(item.id).then( res => {
        if (res.status === 200) {
          setBigImage(res.data.images[0])
          setProItem(res.data)
        }else {
          navigation.goBack()
        }
      })
    }
  }, [])

  return(
    <ScrollView style={styles.container}>
      <BackBtn />
      { proItem && 
        <View style={{ marginTop: 20,  }}>
          <Text style={styles.title}>{proItem.title}</Text>
          <View style={{marginTop: 10,}}>
            <Image source={{ uri: bigImage }} style={{ height: 320, marginBottom: 10, }} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                { proItem.images.map((item, index) =>
                  <TouchableOpacity key={index} onPress={() => setBigImage(item) }>
                   <Image source={{ uri: item }} style={{width: 75, height: 75, marginRight: 10}} />
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
          <Text style={[styles.title, { fontWeight: 'bold', color: '#f0771a', textAlign: 'right', fontSize: 21, marginTop: 10, }]}>{proItem.price}₺</Text>
          <Text style={{marginTop: 10,}}>{proItem.description}</Text>
        </View>
      }
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: statusBarHeight,
    paddingLeft: paddinSpace,
    paddingRight: paddinSpace,
    paddingBottom: paddinSpace,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
  }
});