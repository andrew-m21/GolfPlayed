'use strict';

import React from 'react';
import SocialButton from './socialButton'
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    ScrollView
} from 'react-native';
import ChoiceContainer from './Reusable/ChoiceContainer'

const profileImage = require('../../Images/AuthImages/profile.png');
import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
const {

    MAIN_CONTENT,
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    DASH_BOARD,
    REGISTRATION_ONE,
    REGISTRATION_TWO,
    REGISTRATION_FOUR



} = RouterScene;
export  default  class CompleteYourProfile extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            switchValue: false,
          }
    }
    toggleSwitch = (value) => {
        this.setState({switchValue: value})

    };

    nextClicked = () =>{
       Actions[REGISTRATION_FOUR]()
    };

 render(){
    return(
        <View style = {styles.container}>
            <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
            <View style={styles.header}>
                <Image style={styles.mark} source={profileImage} />
            </View>
            <View style={styles.inputs}>
                <Text  style={{color:'white',
                    fontWeight:'800',
                    fontSize:18,
                    textAlign:'center',
                    backgroundColor:'transparent'}}> Ramesh </Text>
                <Text style={{textAlign:'center',
                    backgroundColor:'transparent',
                    color:'white'}}>What type of golfer are you ?</Text>
            </View>
            <View style = {styles.textChoice}>
                <ChoiceContainer
                    toggleSwitch1 = {this.toggleSwitch}
                    switch1Value = {this.state.switchValue}
                    text= "I'm a tour Pro"
                    />
                <ChoiceContainer
                    toggleSwitch1 = {this.toggleSwitch}
                    switch1Value = {this.state.switchValue}
                    text="I'm a teaching Pro"
                />
                <ChoiceContainer
                    toggleSwitch1 = {this.toggleSwitch}
                    switch1Value = {this.state.switchValue}
                    text="I'm a caddy"
                />
                <ChoiceContainer
                    toggleSwitch1 = {this.toggleSwitch}
                    switch1Value = {this.state.switchValue}
                    text="I'm celebrity"
                />
                <ChoiceContainer
                    toggleSwitch1 = {this.toggleSwitch}
                    switch1Value = {this.state.switchValue}
                    text="None of above"
                />

            </View>
            <TouchableOpacity style={styles.buttonWrap} onPress={this.nextClicked}>
                <View style={styles.button}>
                    <Text style={{color: '#000'}}>Next</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
 }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eee'
    },
    switch:{
        height:20,
        width:40,
    },
    textChoice:{
        //justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'transparent'
    },

    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    },
    inputs: {

        paddingTop:0,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
        flex: 0
    },
    buttonWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom:10,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-60,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15,
        marginBottom: 0,
        marginTop: 100,
        backgroundColor: 'transparent',
        paddingTop: 50,
        paddingBottom:50,
    },
    mark: {
        top:0,
        width: 130,
        height: 130,
        resizeMode:'contain'
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    profileContainer:{
        height:height/4,
        width:height/4,
        resizeMode:'contain'
    },
})