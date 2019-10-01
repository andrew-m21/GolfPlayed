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
    Dimensions
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
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    DASH_BOARD,
    REGISTRATION_ONE,
    REGISTRATION_TWO


} = RouterScene;
const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
} = FBSDK;
export  default  class RegistrationPageOne extends React.PureComponent{

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
        // Attempt a login using the Facebook login dialog asking for default permissions.
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login success with permissions: '
                        +result.grantedPermissions.toString());
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );
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
      Actions[REGISTRATION_TWO]()
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

                <InputContainer
                    secureTextEntry={false}
                    placeholder="First Name *"
                    placeholderTextColor="#7f7f7f"
                    value={this.state.username}
                    onChangeText={this.handleUsernameChange.bind(this)}
                    returnKeyType={'next'}
                    inlineImagePadding={10}
                />
                <InputContainer
                    secureTextEntry={false}
                    placeholder="Last Name *"
                    placeholderTextColor="#7f7f7f"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange.bind(this)}
                    returnKeyType={'go'}
                    onSubmitEditing={this.handleSubmit.bind(this)}
                    inlineImageLeft="lock"
                    inlineImagePadding={10}
                />
                <InputContainer
                    secureTextEntry={false}
                    placeholder="Mobile or Email *"
                    placeholderTextColor="#7f7f7f"
                    //value={this.state.password}
                    //onChangeText={this.handlePasswordChange.bind(this)}
                    returnKeyType={'go'}
                   // onSubmitEditing={this.handleSubmit.bind(this)}
                    inlineImageLeft="lock"
                    inlineImagePadding={10}
                />
                <View style = {styles.refralContainer}>
                    <Image source={profileImage} style = {styles.referalImage}/>
                    <View style = {styles.viewContainer}>
                        <Text style={styles.referalText}>Refered by : </Text>
                        <Text style={styles.referalName}>Rahul sain</Text>
                    </View>
                </View>
                <InputContainer
                    secureTextEntry={false}
                    placeholder="Referel Code"
                    placeholderTextColor="#7f7f7f"
                    //value={this.state.password}
                    //onChangeText={this.handlePasswordChange.bind(this)}
                    returnKeyType={'go'}
                    // onSubmitEditing={this.handleSubmit.bind(this)}
                    inlineImageLeft="lock"
                    inlineImagePadding={10}
                />
                <TouchableOpacity style={styles.buttonWrap} onPress={this.nextBtnClicked}>
                    <View style={styles.button}>
                        <Text style={{color: '#000'}}>Next</Text>
                    </View>
                </TouchableOpacity>


                <View>
                    <Text style = {{ top:height/26 ,backgroundColor:'transparent' , textAlign : 'center' ,color:'white'}}>
                        or connect with
                    </Text>
                    <View style = {{top:height/30,left:30,
                        width:width-100,
                        backgroundColor:'transparent',
                        flexDirection:'row', alignItems:'center' ,
                        justifyContent:"space-between"}}>
                        <Image source={LinkedImage} style={styles.imageColor}/>
                        <TouchableOpacity onPress ={this.onFbLogInClicked} style = {{backgroundColor:'transparent'}}>
                            <Image source={fbButtonImage} style={styles.imageColor}/></TouchableOpacity>
                        <Image source={googleImage} style={styles.imageColor}/>

                    </View>


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
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'transparent',
        paddingTop: 30
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
        paddingTop:20,
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
      top:0,
      marginTop:0,
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
        top:5,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        backgroundColor:'transparent',
        marginBottom:15,
        paddingBottom: 10
    },
    referalImage:{
        height:55,
        width:55,

        borderRadius: 27.5,
        resizeMode:'contain'
    },
    referalText:{
        top:5,
        fontSize:14,
        color:'white'
    },
    referalName:{
        top:5,
        fontSize:20,
        color:'#BBAA64'
    },
    viewContainer:{
        marginLeft:10,
        marginRight:10,
    }

})