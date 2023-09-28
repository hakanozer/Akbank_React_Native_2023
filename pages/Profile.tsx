import { useState, useEffect } from 'react';
import { 
StyleSheet, View, Text
} from 'react-native';
import { userGetData } from '../utils/storage';


import { 
backgroundColor, 
statusBarHeight, 
paddinSpace
} from '../utils/theme';


export default function Profile() {

  useEffect(() => {
    console.log("Profile Call")
    userGetData().then(res => {
      //console.log(res)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
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
});