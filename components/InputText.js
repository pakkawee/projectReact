import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputText = () => {
    const [userName,setUserName] = useState ('');
  return (
    <View style={{flex:1,marginTop:20,backgroundColor: 'coral',alignItems:'center'}}>
      <Text>Insert any text in below input</Text>
      <TextInput
      value = {userName}
      style = {styles.InputText}
        placeholder='Please input username '
      />
      <text>
        {userName}
        <text/>
        < Text Style = {{color : 'blue', fontsize : 28}}>{userName}<Text/>

    </View>
    
  )
}

export default InputText

const styles = StyleSheet.create({
    TextInput:{
        widtth:300,
        height : 45,
        padding : 10,
        onChangeText :(userName) = {(setUserName,userName)},
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: 'yellow'
    }
  
})