import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'


const UserNameandPassword = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const checkTextInput = () => {
        if(!name.trim()){
            onPress={() => alert('Please Enter Name' )}
            return;
        }
        else(!mail.trim()){}
            onPress={() => alert('Please Enter Email' )}
            return;}
        else{
            onPress={() => alert('Success' )}
            return; }
    }
    
    return (
        <View style = {{ flex: 1, marginTop:20, alignItems: 'center'}}>
            <TextInput
                value={name}
                style={styles.input}
                placeholder='Enter Name '
                onChangeText={(name => { setName(name) })} />
            <TextInput
                value={mail}
                style={styles.input}
                placeholder='Enter Email '
                onChangeText={(mail => { setMail(mail) })} />
            <Button
            checkTextInput
                title='Submit'
                color = 'pink'
            /> 
        </View>
    )

export default UserNameandPassword

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
    },

});