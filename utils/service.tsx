import axios from 'axios'
import { IJWTUserModel } from '../models/IJWTUserModel'

const base_url = "https://dummyjson.com/"
const config = axios.create({
  baseURL: base_url,
  timeout: 15000,
  //headers: { 'keytoken' : 'sdfghj234567' },
  //auth:{ username: '', password: ''}
})


// login user
export const userLogin = ( username: string, password: string ) => {
  const sendObj = {
    username: username,
    password: password
  }
  return config.post<IJWTUserModel>('auth/login', sendObj)
}
