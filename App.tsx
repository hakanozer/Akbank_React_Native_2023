import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ToastManager from 'toastify-react-native';
import { SimpleLineIcons, Octicons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import { store } from './useRedux/Store'

// import pages
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Likes from './pages/Likes'
import Profile from './pages/Profile'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator()

// Login - Register - Stack
const LoginStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
  <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
</Stack.Navigator>

// Product - Product Detail - Stack
const ProductStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
  <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
</Stack.Navigator>

// Likes - Stack
const LikesStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Likes" component={Likes} options={{headerShown: false}} />
</Stack.Navigator>

// Profile - Stack
const ProfileStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
</Stack.Navigator>

// App Tabs
const AppTab = () => 
<Tab.Navigator
  initialRouteName="Products"
  activeColor="#ffffff"
  inactiveColor="#000000"
  barStyle={{ backgroundColor: '#4287f5', height: 80 }}
>
  <Tab.Screen 
    name='Products'
    component={ProductStack}
    options={{
      tabBarIcon: ({color, size}: any) => (
        <SimpleLineIcons name="basket" size={25} color={color} />
      )
    }}
  />
  
  <Tab.Screen 
    name='Likes'
    component={LikesStack}
    options={{
      tabBarIcon: ({color, size}: any) => (
        <SimpleLineIcons name="heart" size={25} color={color} />
      )
    }}
  />

  <Tab.Screen 
    name='Profile'
    component={ProfileStack}
    options={{
      tabBarIcon: ({color, size}: any) => (
        <Octicons name="person" size={25} color={color} />
      )
    }}
  />

</Tab.Navigator>



export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <ToastManager style={{ top: 20, width: '100%',}} />
      <Stack.Navigator>
          <Stack.Screen name="LoginStack" component={LoginStack} options={{headerShown: false}} />
          <Stack.Screen name="AppTab" component={AppTab} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );

}

const styles = StyleSheet.create({
});

