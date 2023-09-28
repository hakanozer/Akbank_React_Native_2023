import { useState, useEffect } from 'react';
import { 
StyleSheet, View, Text, FlatList
} from 'react-native';
import { userGetData } from '../utils/storage';
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '../useRedux/Store'


import { 
backgroundColor, 
statusBarHeight, 
paddinSpace
} from '../utils/theme';
import ProductItem from '../components/ProductItem';


export default function Likes() {

  const likesData = useSelector( (obj: StateType) => obj.LikesReducer )
  const dispatch = useDispatch()
  

  useEffect(() => {
    console.log("Likes Call")
    userGetData().then(res => {
      //console.log(res)
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={likesData}
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

