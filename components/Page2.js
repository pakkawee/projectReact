import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-nativigation/native'
import {createNativeStackNavigator}  from '@react-nativigation/native-stack'
import style from '.components/style'


const Page2 = ({navigation,route}) => {
  return (
    <View style={styles.container}>
      <Text>This is the second page</Text>
      <Button
        title='Go to first page'
        onPress={() => navigation.navigate('Page1')}
        color = '#pink'
      />
      <Button
        title='Go to third page'
        onPress={() => navigation.navigate('Page3')}
        color = '#pink'
      />
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({})