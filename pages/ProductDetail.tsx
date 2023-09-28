import { useEffect, useState } from 'react'
import  { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IProduct } from '../models/IProducts';
import BackBtn from '../components/BackBtn';
import { backgroundColor, paddinSpace, statusBarHeight } from '../utils/theme';
import { singleProduct } from '../utils/service';
import { AntDesign } from '@expo/vector-icons';
import { StateType } from '../useRedux/Store';
import { useSelector, useDispatch } from 'react-redux'
import { ILikeAction } from '../useRedux/LikesReducer';
import { LikesEnum } from '../useRedux/LikesEnum';

export default function ProductDetail() {

  const likesData = useSelector( (obj: StateType) => obj.LikesReducer )
  const dispatch = useDispatch()

  const [likeStatus, setLikeStatus] = useState(false)
  const [proItem, setProItem] = useState<IProduct>()
  const [bigImage, setBigImage] = useState('')
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    if ( route.params.item ) {
      const item = route.params.item as IProduct
      singleProduct(item.id).then( res => {
        if (res.status === 200) {
          setBigImage(res.data.images[0])
          setProItem(res.data)
          const index = likesData.findIndex((item) => item.id === res.data.id)
          if(index > -1) {
            setLikeStatus(true)
          }
        }else {
          navigation.goBack()
        }
      })
    }
  }, [])

  const fncLikeStatus = () => {
    if (!likeStatus) {
        const obj: ILikeAction = {
          type: LikesEnum.LIKE_ADD,
          payload: proItem!
        }
        dispatch(obj)
    }else {
        const obj: ILikeAction = {
          type: LikesEnum.LIKE_REMOVE,
          payload: proItem!
        }
        dispatch(obj)
    }
    setLikeStatus(!likeStatus)
  }

  return(
    <ScrollView style={styles.container}>
      <BackBtn />
      { proItem && 
        <View style={{ marginTop: 20,  }}>
          <Text style={styles.title}>{proItem.title}</Text>
          <View style={{marginTop: 10,}}>
            <View>
                <View style={{position: 'absolute', right: 10,  top: 10, zIndex: 1,}}>
                  <TouchableOpacity onPress={fncLikeStatus}>
                    <AntDesign name="heart" size={28} color={ likeStatus === true ? "#4287f5" : "red" } />
                  </TouchableOpacity>
                </View>
              
              <Image source={{ uri: bigImage }} style={{ height: 320, marginBottom: 10, }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                { proItem.images.map((item, index) =>
                  <TouchableOpacity key={index} onPress={() => setBigImage(item) }>
                   <Image source={{ uri: item }} style={{width: 75, height: 75, marginRight: 10}} />
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
          <Text style={[styles.title, { fontWeight: 'bold', color: '#f0771a', textAlign: 'right', fontSize: 21, marginTop: 10, }]}>{proItem.price}₺</Text>
          <Text style={{marginTop: 10,}}>{proItem.description}</Text>
        </View>
      }
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
  title: {
    fontSize: 19,
    textAlign: 'center',
  }
});