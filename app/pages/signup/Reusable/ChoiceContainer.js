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
     <Text style={styles.textContiner}>{props.text}</Text>
     <SwitchBtn

         toggleSwitch1 = {props.toggleSwitch1}
         switch1Value = {props.switch1Value}
     />

 </View>)


}

const styles = StyleSheet.create({
    choiceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height:50,
    },
    textContiner:{
     textAlign:'center',
      marginLeft:30,
        color:'white',
        fontSize:18

    }

})