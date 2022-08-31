import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import style from './components/style'
import {createNativeStackNavigator} from '@react-navigation/native'

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = 'Page1'
        screenOptions={{
          headerStyle:{backgroundColor : '#pink'},
          headerTintcolor : '#fff',
          headerTitleStyle:{fontWeight:'bold',fontSize:25}
        }}
      >
      

      </Stack.Navigator>
      <Stack.Screen name ='First Page' component = {Page1}/>
      <Stack.Screen name ='Second Page'component = {Page2}/>
      <Stack.Screen name ='Third Page' component = {Page3}/>
    </NavigationContainer>
  )


export default App

