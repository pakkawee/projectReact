import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'


const UserNameandPassword = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style = {{ flex: 1, marginTop:20, alignItems: 'center'}}>
            <TextInput
                value={username}
                style={styles.input}
                placeholder='email '
                onChangeText={(username => { setUsername(username) })} />
            <TextInput
                value={password}
                style={styles.input}
                placeholder='password '
                onChangeText={(password => { setPassword(password) })} />
            <Button
                title='Submit'
                onPress={() => alert('email: ' + username + '\npassword :' + password)}
                color = 'pink'
            />

        </View>
    )
}

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