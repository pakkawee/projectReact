import { StyleSheet, Text, View, Button,Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = () => {
            alert('Hello Im Simple Alert from javaScript')
}
const twoOptionAlertHanler = () => {
    //use Alert from react native
    Alert.alert(
        //title
        'Hello', 
        //body
        'I am two option alert from React Native',
        [
            {
                text: 'Yes',
                onPress: ()=> alert ('Yes Pressed')
            },
            {
                text: 'No',
                onPress: ()=> alert ('No Pressed'),
                style: 'cancel'
            }
        ],{
            //clicking outside of alert will not cancel
            cancelable:false
        }
    );
}

return (
    <View style={styles.container}>
        <Button
            title='Simple Alert'
            onPress={simpleAlertHanler} />
        <Button
            title='Alert with two options'
            onPress={twoOptionAlertHanler} />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
export default AlertComponent

