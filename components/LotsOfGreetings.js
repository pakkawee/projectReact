import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name},{date})=>{
    return(

        <View style={{alignItems: 'center', top: 50}} >
            <text>Hello {name}{date}</text>
    </View>
    )
};

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems: 'center', top: 50}} >
      <Greeting name = 'Merry Christmas' date = '   25-Dec-2022'  />
      <Greeting name = 'HNY' date = '   31-Dec-2022' />
      <Greeting name = 'Songkran festival' date = '     13-Apr-2022' />
    </View>
  )
}

export default LotsOfGreetings