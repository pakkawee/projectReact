import { View, Text, Button } from 'react-native'
import React ,{useState,useEffect}from 'react'

const Count = () => {
    const[count, setCount] = useState(0);

    useEffect(()=>{
      console.log('use effect 1')
    })
// re render ค่อนข้างบ่อยเกินไป ไม่แนะนำให้ใข้

    useEffect(()=>{
      console.log('use effect 2')
    },[count])

    useEffect(()=>{
      console.log('use effect 3')
    },[])
    

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title='Click me'
        onPress={()=>setCount(count+1)}
      />
    </View>
  )
}

export default Count