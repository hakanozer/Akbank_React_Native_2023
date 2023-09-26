import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToastManager from 'toastify-react-native';

// import pages
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <ToastManager style={{ top: 20, width: '100%',}} />
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
          <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
});

