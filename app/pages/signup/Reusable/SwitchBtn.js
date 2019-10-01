import React, { Component } from 'react'
import {
    View,
    Switch,
    StyleSheet
}
    from 'react-native'

export default SwitchBtn = (props) => {
    return (
        <View style = {styles.container}>
            <Switch
                onValueChange = {props.toggleSwitch1}
                value = {props.switch1Value}
                onTintColor ='#BBAA64'
                tintColor='#fffaf0'/>

        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        width:80,
        height:20,
        marginRight: 2
    }
});