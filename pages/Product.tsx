import { useState, useEffect } from 'react';
import { 
StyleSheet,  
ScrollView, Text
} from 'react-native';

import { 
backgroundColor, 
statusBarHeight, 
paddinSpace
} from '../utils/theme';

export default function Product() {
  return (
    <ScrollView style={styles.container}>
      <Text>Product</Text>
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