import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={ styles.separator}/> 
)

const ButtonExample = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <View>
      <Text style = {styles.title}>The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone. </Text>
    <Button title = 'Press me'
    onPress={()=>alert('Single Button pressed')}
    color = 'green'/>
    </View>
    <Separator/>
    <View>
      <Text style = {styles.title}>The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone. </Text>
    <Button title = 'Press me'
    onPress={()=>alert('Single Button pressed')}
    color = 'orange'/>
    </View>
    <Separator/>
    <View>
      <Text style = {styles.title}>usable by everyone. </Text>
    <Button title = 'Press me'
    disabled //disabled button + turn itself grey
    />
    </View>
    <Separator/>
    <View>
      <Text style = {styles.title}>usable by everyone. </Text>
      <View style = {styles.fixToText}>
    <Button title = 'Left button'
     onPress={()=>alert('Left button pressed')}
     color = 'purple'
    />
     <Button title = 'Right button'
     onPress={()=>alert('Right button pressed')}
     color = 'navy'
    />
     </View>
     </View>
    </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    },
     title: {
    textAlign: 'center',
    marginVertical: 8,
    },
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
    },
    });