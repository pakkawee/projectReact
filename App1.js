import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from './components/styles';
import Logo from './components/Logo';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';

const App = () => {
  const showData = ()=>{
      alert("Hello Button")
}
return (
  <View>
    <Text style={[styles.title, styles.warning]}>Hello react native</Text>
    <Logo />
    <Button
      onPress={showData}
      title='Click me' />
    {/* <TextInputExample/> */}
    {/* <Cat/> */}
  </View>
)
}

export default App

