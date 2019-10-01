
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
    Button
} from 'react-native';

const plusBtnImage = require('../../Images/AuthImages/addHc.png');

import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import InputContainer from './InputContainer';
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
    REGISTRATION_THREE


} = RouterScene;
export  default  class RegistrationPageTwo extends React.PureComponent{

    constructor(props) {
        super(props)

        this.state =  {
            username: '',
            password: '',
            animating: false
        }

    }
    onLinkedInClicked = () =>{
        console.log('great here will be LinkedIn')
    };

    onFbLogInClicked = () =>{
        console.log('great here will be FbIn')
    };

    onGoogleBtnClicked = () =>{
        console.log('great here will be GoogleIn')
    };


    componentWillUnmount() {
        this.setState({animating: false});

    }
    componentDidMount() {
        this.setState({animating: false});
        //SplashScreen.hide();

    }
    handleUsernameChange(text) {
        this.setState({username: text});
    }
    handlePasswordChange(text) {
        this.setState({password: text});
    }
    handleSubmit() {
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        if (!username || !password) {
            return;
        }


    }
    nextBtnClicked = () =>{
        Actions[REGISTRATION_THREE]()
    };


    render(){
        return  (<View style={styles.container}>
                <StatusBar
                    backgroundColor={'#000000'}
                />

                <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={require('./img/tut1_logo.png')} />
                </View>
                <View style={styles.inputs}>
                    <Text  style={{color:'white',
                        fontWeight:'800',
                        fontSize:18,
                        textAlign:'center',
                        backgroundColor:'transparent'}}> Tell us about you and your golf</Text>

                    <View style = {{
                        flexDirection:'row',
                        justifyContent:'center',
                        top:15,
                        backgroundColor:'transparent',
                        }}>
                        <TouchableOpacity style={{
                            width:(width/2)-22,
                            height:40,
                            borderTopLeftRadius :20,
                            borderBottomLeftRadius :20,
                            backgroundColor:'white',
                            marginRight:2,marginBottom:15,}}><Text
                            style={{
                             textAlign:'center' ,
                                backgroundColor:'transparent',
                                top:10}}>Male</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={{
                            width:(width/2)-22,
                            marginLeft:2,
                            marginBottom:15,
                            height:40,
                            borderTopRightRadius :20,
                            borderBottomRightRadius :20,
                            backgroundColor:'#BBAA64'}}>
                            <Text style={{
                                 textAlign:'center',backgroundColor:'transparent', top:10}}>Female</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {{
                        top:15,
                        backgroundColor:'transparent',
                        }}>
                        <InputContainer
                            secureTextEntry={false}
                            placeholder="Select your home country*"
                            placeholderTextColor="#7f7f7f"
                            value={this.state.username}
                            onChangeText={this.handleUsernameChange.bind(this)}
                            returnKeyType={'next'}
                            inlineImagePadding={10}
                        />
                        <InputContainer
                            secureTextEntry={false}
                            placeholder="Select your home club*"
                            placeholderTextColor="#7f7f7f"
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange.bind(this)}
                            returnKeyType={'go'}
                            onSubmitEditing={this.handleSubmit.bind(this)}
                            inlineImageLeft="lock"
                            inlineImagePadding={10}
                        />

                        <TouchableOpacity style = {styles.addClubStyle}>
                            <Image source={plusBtnImage} style={styles.addClubImg}/>
                            <Text style={styles.addNewClubTxt}> Add another home club</Text>
                        </TouchableOpacity>

                        <InputContainer
                            secureTextEntry={false}
                            placeholder="Select your handicap *"
                            placeholderTextColor="#7f7f7f"
                            //value={this.state.password}
                            //onChangeText={this.handlePasswordChange.bind(this)}
                            returnKeyType={'go'}
                            // onSubmitEditing={this.handleSubmit.bind(this)}
                            inlineImageLeft="lock"
                            inlineImagePadding={10}
                        />

                    </View>

                    <View style = {styles.refralContainer}>
                        <Text 
                            numberOfLines={2}
                            style = {{ 
                                textAlign:'center', 
                                backgroundColor:'transparent',
                                color:'white',
                                fontSize:10, }}>By clicking "Create account" you accept and agree to the GolfPlayed.com
                            <Text style={{color:"#BBAA64"}}> Privacy Policy</Text> and <Text style={{color:"#BBAA64"}}>Term & Condition.</Text>
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.buttonWrap} onPress={this.nextBtnClicked}>
                        <View style={styles.button}>
                            <Text style={{color: '#000'}}>Create account</Text>
                        </View>
                    </TouchableOpacity>

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

    addClubStyle:{

        top:0,
        backgroundColor:'transparent',
        flex:0,
        height:20,
        marginBottom:15,
        flexDirection:'row'

    },
    addClubImg:{
     marginLeft:30,
     height:20,
     width:20,
    },
    addNewClubTxt:{

        color:'#BBAA64',
        fontSize:14,
        textAlign:'left'


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
        marginBottom: 0,
        marginTop: 50,
        backgroundColor: 'transparent',
        paddingTop: 0
    },
    mark: {
        top:0,
        width: 260,
        height: 100,
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
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
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
        top:130,
        alignItems: 'center',
        justifyContent: 'center',    
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-40,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 40,
        marginTop: 0, 
        marginBottom: 0, 
        marginLeft: 20, 
        marginRight: 20, 
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
        backgroundColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:40,
        marginRight:40,
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
    }

})