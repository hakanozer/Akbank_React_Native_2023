import AsyncStorage from '@react-native-async-storage/async-storage'
import { IJWTUserModel } from '../models/IJWTUserModel'

export const userSetData = (data: IJWTUserModel) => {
  const st = JSON.stringify(data)
  AsyncStorage.setItem('@user', st)
}

export const userGetData = () : IJWTUserModel | null => {
  return null
}