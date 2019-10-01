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
    ToastAndroid,Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Spinner from 'react-native-loading-spinner-overlay';

import InputContainer from './InputContainer';
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
} = RouterScene;
export default class ResetSuccess extends React.Component {

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
    handleUsernameChange(text) {
        this.setState({username: text});
    }
    handlePasswordChange(text) {
        this.setState({password: text});
    }
    handleSubmit() {


    }

    logIn = () => {
         Actions[LOG_IN]()

    };


    render() {
        var overrides = { textColor : '#ffffff', backgroundColor: '#004c86' };
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#000000'}
                />

                <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
                <View style={styles.inputs}>

                    <View style={styles.buttonWrap} >
                        <View style={styles.center}>
                            <Text style={styles.sucessText}>Success!</Text>
                            <Text style={styles.descText}>Your password has been reset.</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonWrap} onPress={this.logIn}>
                        <View style={styles.button}>
                            <Text style={{color: '#000'}}>Sign in</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }


}


var styles = StyleSheet.create({
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
        backgroundColor: 'transparent'
    },
    mark: {
        top:30,
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

        alignItems:'center',
        justifyContent:'center',
        flex: 1,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    sucessText: {
        color: 'white',
        fontSize:16,
        fontWeight:'800',
        backgroundColor: 'transparent'
    },
    descText:{
        marginTop:10,
        color: 'white',
        fontSize:15,
        backgroundColor: 'transparent'
    },
    buttonWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-150,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        marginTop: 100
    }

})

