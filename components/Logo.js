import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = false;

  return (
    <View>
      <Text style = {styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } (condition if = &&)*/} 

     { /*if,else or conditional operators */}
     {
      isTH
      ?(<Text>ภาษาไทย</Text>)
      :(<Text>ภาษาอังกฤษ</Text>)
     }

    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color: "magenta", 
        fontSize: 40
    }
})