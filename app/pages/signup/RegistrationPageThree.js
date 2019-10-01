
'use strict';


import React from 'react';
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
    Button
} from 'react-native';

const fbButtonImage = require('../../Images/AuthImages/FbIn.png');
const LinkedImage = require('../../Images/AuthImages/googleIn.png');
const  googleImage = require('../../Images/AuthImages/linkedIn.png');
const profileImage = require('../../Images/AuthImages/profile.png');

import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import InputContainer from './InputContainer';
import RouterScene from '../../Constant/constant';
const {

    MAIN_CONTENT,
    COMPLETE_PROFILE

} = RouterScene;
export  default  class RegistrationPageThree extends React.PureComponent{

    constructor(props) {
        super(props)

        this.state =  {
            username: '',
            password: '',
            animating: false
        }

    }

    componentWillUnmount() {
        this.setState({animating: false});

    }
    componentDidMount() {
        this.setState({animating: false});

    }

    handleSubmit() {
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        if (!username || !password) {
            return;
        }
    }

    completeProfileClicked = () =>{
        Actions[COMPLETE_PROFILE]()
    };
    nextBtnClicked = () =>{
        Actions[MAIN_CONTENT]()
    };

    render(){

        return  (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#000000'}
                />
                <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
                <TouchableOpacity style={styles.skipBtnContainer} onPress={this.nextBtnClicked}>
                    <Text style={styles.skipBtnText}>skip</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Image style={styles.mark}
                           source={require('./img/tut1_logo.png')}/>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.welcomeUser}> Welcome Ramesh Sain </Text>
                    <Text style={styles.letsStarted}>Let's get started</Text>
                    <View style = {styles.profileSuperStyle}>
                        <Image source={profileImage} style={styles.profileContainer}/>
                        <TouchableOpacity style={styles.profileImageContainer}>
                            <Text style={styles.uploadProfileText}>upload profile picture</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.completeProfileContainer}>
                        <TouchableOpacity style={styles.completeProfile}
                                          onPress = {this.completeProfileClicked}><Text
                            style={styles.completeProfileText}>Complete profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.nextBtnClicked}
                                          style={styles.browseAppContainer}>
                            <Text style={styles.browseBtnText
                                }>Browse app</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Spinner color="#00695C" visible={this.state.animating} />
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eee'
    },
    profileSuperStyle:{
        flex:1 ,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:30
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15,
        marginBottom:0,
        marginTop: 50,
        backgroundColor: 'transparent',
        paddingTop: 0,
    },

    mark: {
        top:0,
        width: 260,
        height: 100,
        resizeMode:'contain',
        marginBottom:0,
    },

    profileContainer:{
        height:height/4,
        width:height/4,
        resizeMode:'contain'
    },

    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center',
        width:320
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        paddingTop:0,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 0,
        flex: .55
    },

    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },

    whiteFont: {
        color: '#FFF'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        position: 'absolute',
        top: height/2 -80,
        height: 200,
        width: width
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    backgroundImage: {

        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    center: {
        width: width-60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        color: '#BBAA64',
        backgroundColor: 'transparent'
    },
    buttonWrap: {
        top:100,
        alignItems: 'center',
        justifyContent: 'center',
        width: width-60
    },
    button:{
        left:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-60,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 50,
        margin: 20
    },

    skipBtnContainer:{
        position: 'absolute',
        top:20,
        width:width-10 ,
        paddingRight:0,
        height:30,
        backgroundColor:'transparent'
    },
    skipBtnText:{
        marginRight:0,
        textAlign:'right',
        backgroundColor:'transparent',
        top:7 ,color:'white'
    },

    welcomeUser:{
        color:'white',
        fontWeight:'800',
        fontSize:18,
        textAlign:'center',
        backgroundColor:'transparent'
    },

    letsStarted:{
        textAlign:'center',
        backgroundColor:'transparent',
        color:'white'
    },
    profileImageContainer:{
        width:(width/2)-10 ,
        marginLeft:0,
        height:50,
        backgroundColor:'transparent'
    },
    uploadProfileText:{
        textAlign:'center',
        backgroundColor:'transparent',
        top:30,
        color:'white'
    },
    imageColor:{
        alignItems:'center',
        margin:30,
        height:35,
        width:35,
        resizeMode:'contain'
    },
    refralContainer:{
        top:100,
        flexDirection:'row',
        marginLeft:40,
        marginRight:40,
        backgroundColor:'transparent',

    },
    referalImage:{
        height:55,
        width:55,

        borderRadius: 27.5,
        resizeMode:'contain'
    },
    referalText:{
        fontSize:18,
        color:'white'
    },
    referalName:{
        top:6,
        fontSize:20,
        color:'#BBAA64'
    },
    viewContainer:{
        marginLeft:10,
        marginRight:10,
    },
    completeProfile:{
        width:(width/2)-22 ,
        height:40,
        borderTopLeftRadius :20 ,
        borderBottomLeftRadius :20,
        backgroundColor:'white',
        marginRight:0,},

    completeProfileText:{
        textAlign:'center' ,
        backgroundColor:'transparent',
        top:10,
        color: '#000'
    },

    completeProfileContainer: {
        flexDirection:'row',
        justifyContent:'center',
        top:0,
        backgroundColor:'transparent',
        marginBottom:30
    },
    browseAppContainer: {
        width:(width/2)-22 ,
        marginLeft:2,
        height:40,
        borderTopRightRadius :20,
        borderBottomRightRadius :20,backgroundColor:'white'
    },
    browseBtnText:{
        textAlign:'center',
        backgroundColor:'transparent',
        top:10,
        color: '#000'
    }


})