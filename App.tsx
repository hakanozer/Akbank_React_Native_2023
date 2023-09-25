import { useState } from 'react';
import { 
StyleSheet, 
View, 
Text, 
TextInput, 
ScrollView, 
TouchableOpacity,
Alert, Image
} from 'react-native';

import { 
backgroundColor, 
statusBarHeight, 
paddinSpace, 
titleColor, 
inputStyle,
btnView,
btnText
} from './utils/theme';

export default function App() {

  // state create
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const fncLogin = () => {
    if ( username === '' ) {
      Alert.alert('Fail', 'Username Empty!')
    }else if ( password === '' ) {
      Alert.alert('Fail', 'Password Empty!')
    }else if ( password.length < 5 ) {
      Alert.alert('Fail', 'Password 5 chars Fail!')
    }else {
      console.log('fncLogin Call', username, password)
    }
  }

  const fncRegister = () => {
    console.log('fncRegister Call')
  }
  

  return (
    <ScrollView style={styles.container}>
      <Image style={{ width: 64, height: 64, alignSelf: 'center', marginBottom: 20,  }} source={require('./assets/logo.png')} />
      <Text style={styles.title}>User Login</Text>
      <TextInput onChangeText={(txt: string) => setUserName(txt) } keyboardType='email-address' autoCapitalize='none'  placeholder='Username' style={inputStyle} />
      <TextInput onChangeText={(txt: string) => setPassword(txt) } secureTextEntry={true} placeholder='Password' style={inputStyle} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <TouchableOpacity onPress={fncLogin}>
          <View style={btnView}>
            <Text style={[btnText, { color: titleColor } ]}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={fncRegister}>
          <View style={btnView}>
            <Text style={[btnText, { color: titleColor } ]}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    color: titleColor,
    
  }
});

