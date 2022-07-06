import { View, Text } from 'react-native'
import React from 'react'

const name = (props) =>{

    return(

        <View style={{alignItems: 'center', top: 50}} >
            <Text>Your First Name is {props.fName1} and Last name is {props.lName1}</Text>
            <Text>Your First Name is {props.fName2} and Last name is {props.lName2}</Text>
            
    </View>
    )
};



const MyCustomTextWith = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <name fName1 = 'Pakkawee' lName1 = 'Ratanamalaya'  />
      <name fName2 = 'Panyaporn' lName2 = 'Luangponsinkul'  />

    </View>
  )
}

export default MyCustomTextWith