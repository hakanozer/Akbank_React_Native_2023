import { useState, useEffect } from 'react';
import { 
StyleSheet, View, Text, ScrollView, TouchableOpacity, Button
} from 'react-native';
import { userGetData } from '../utils/storage';
import { Hoshi } from 'react-native-textinput-effects';
import MapView, {Marker} from 'react-native-maps';
import { Camera, CameraType } from 'expo-camera';


import { 
backgroundColor, 
statusBarHeight, 
paddinSpace
} from '../utils/theme';
import { IJWTUserModel } from '../models/IJWTUserModel';


export default function Profile() {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [user, setUser] = useState<IJWTUserModel>()

  useEffect(() => {
    console.log("Profile Call")
    userGetData().then(res => {
      if (res) {
        setUser(res)
      }
    })
  }, [])

    if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

  return (
    <ScrollView style={styles.container}>
     { user && 
        <>
          <Hoshi
            label={'Name'}
            borderColor={'#4287f5'}
            borderHeight={1}
            inputPadding={0}
            backgroundColor={'#F9F7F6'}
            style={{marginBottom: 15 }}
            inputStyle={{paddingTop: 15, paddingLeft: 15, fontSize: 15}}
            labelStyle={{paddingLeft: 15}}
            defaultValue={user.firstName}
          />
          <Hoshi
            label={'Surname'}
            borderColor={'#4287f5'}
            borderHeight={1}
            inputPadding={0}
            backgroundColor={'#F9F7F6'}
            style={{marginBottom: 15}}
            inputStyle={{paddingTop: 15, paddingLeft: 15, fontSize: 15}}
            labelStyle={{paddingLeft: 15}}
            defaultValue={user.lastName}
          />
        </>
      }
      <MapView
        style={{width: '100%', height: 300}}
        initialRegion={{
          latitude: 41.0224123,
          longitude: 28.9187957,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <Marker
        coordinate={{latitude: 41.0144537, longitude: 28.9362193 }}
        title='İşletme -1'
        description='İşletme -1 Detay'
      />
      <Marker
        coordinate={{latitude: 41.0144861, longitude: 28.943472 }}
        title='İşletme -2'
        description='İşletme -2 Detay'
      />
      </MapView>

      <Camera style={{ width: '100%', height: 200 }} type={type}>
        <View style={{width: 100, height: 30, backgroundColor:'green'}}>
          <TouchableOpacity style={{}} onPress={toggleCameraType}>
            <Text style={{}}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

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
});