import { useState, useEffect } from 'react';
import { 
StyleSheet,  
ScrollView, Text, ActivityIndicator, View, FlatList
} from 'react-native';
import { allProduct } from '../utils/service';
import { userGetData } from '../utils/storage';

import { 
backgroundColor, 
statusBarHeight, 
paddinSpace
} from '../utils/theme';
import { Toast } from 'toastify-react-native';
import { IProduct } from '../models/IProducts';
import ProductItem from '../components/ProductItem';

export default function Product() {

  useEffect(() => {
    userGetData().then(res => {
      //console.log(res)
    })
  }, [])


  const [load, setLoad] = useState(true)
  const [arr, setArr] = useState<IProduct[]>([])
  useEffect(()=> {
    setLoad(true)
    allProduct().then(res => {
      setArr(res.data.products)
    }).catch(err => {
      Toast.error("Product List Fail")
    }).finally(() => {
       setLoad(false)
    })
  }, [])

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' animating={load} hidesWhenStopped={!load}/>
      <FlatList 
        data={arr}
        renderItem={({item}) => <ProductItem item={item} /> }
        keyExtractor={(item, index) => index.toString() }
      />
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