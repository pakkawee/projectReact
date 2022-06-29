import { View, TextInput, Button } from 'react-native'
import React from 'react'
export default function App() {
    return (
        <View style={{ padding: 50 }}>
            <view style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <TextInput
                    placeholder='Course Goal'
                    style={{
                        width: '80%',
                        borderColor: 'black',
                        borderWidth: 1,
                        padding: 10
                    }} />
            <Button title='ADD'/>
            </view>
        </View>
    )
}
