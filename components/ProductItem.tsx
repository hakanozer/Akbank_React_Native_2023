import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import { IProduct } from '../models/IProducts'
import { useNavigation, useRoute } from '@react-navigation/native';

const deviceWidth = Dimensions.get("window").width
const imageWidth = 120
export default function ProductItem(props: { item: IProduct }) {

  const navigation = useNavigation()

  const gotoDetail = () => {
    navigation.navigate('ProductDetail', { item: props.item })
    //console.log(props.item)
  }

  return (
    <TouchableOpacity onPress={gotoDetail}>
      <View style={styles.mainView}>
        <Image style={styles.imageThumb} source={{uri: props.item.thumbnail}} />
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={[styles.title, { marginTop: 5, fontSize: 15 }]}>{props.item.category}</Text>
          <View style={{position: 'absolute', bottom: 10, }}>
            <Text style={[styles.title, { fontWeight: 'bold', color: '#f0771a' }]}>{props.item.price}₺</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:'#ffffff',
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageThumb: {
    width: imageWidth,
    height: imageWidth,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    width: deviceWidth - imageWidth + 20,
  }
})

