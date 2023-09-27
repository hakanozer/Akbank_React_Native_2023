import AsyncStorage from '@react-native-async-storage/async-storage'
import { IJWTUserModel } from '../models/IJWTUserModel'

export const userSetData = async (data: IJWTUserModel) => {
  const st = JSON.stringify(data)
  await AsyncStorage.setItem('@user', st)
}

export const userGetData = async () => {
  try {
    const stData = await AsyncStorage.getItem('@user')
    const userModel = JSON.parse(stData) as IJWTUserModel
    return userModel
  }catch(err) {
    return null
  }
}