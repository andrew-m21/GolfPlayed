import React, { Component } from 'react'
import {
    View,
    Switch,
    StyleSheet,
    Text,
} from 'react-native'
import SwitchBtn from './SwitchBtn'
 export default ChoiceContainer = (props) =>{
 return(<View style = {styles.choiceContainer}>
     <SwitchBtn
         toggleSwitch1 = {props.toggleSwitch1}
         switch1Value = {props.switch1Value}
     />

 </View>)


}

const styles = StyleSheet.create({
    choiceContainer:{  
      
    },
})