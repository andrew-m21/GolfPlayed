import React, {Component} from 'react'
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Alert,
    LayoutAnimation,
    ListView,Switch,
    Dimensions,ScrollView
  } from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from './ChoiceContainer';
import GenderButtongroup from './GenderButtongroup.js';
const {
    SETTINGS,
    ACCOUNT_DETAIL,
    MEMBERS_AREA,
} = RouterScene;
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const golfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class Communication extends React.Component  {
  constructor(props) {
    super(props);

        this.state = {
            falseSwitchIsOn: true,
          }
    }
    toggleSwitch = (value) => {
        this.setState({switchValue: value})

    };
    getInitialState() {
        return {
          trueSwitchIsOn: false,
          falseSwitchIsOn: true,
        };
      }
    MEMBERSAREA = () => {
      //By Harshit
      Actions[MEMBERS_AREA]()
    };
    ACCOUNT = () => {
        //By Harshit
        Actions[ACCOUNT_DETAIL]()
    };
    SETTINGS = () => {
      //By harshit
      Actions[SETTINGS]()
    };
    render() {
      let handleToUpdate = this.props.handleToUpdate;
        return (
            <View style={styles.container}>
            <ScrollView>
                <Image style={styles.dashImage} source={dashImage} >
                    <View style={styles.flex_column}>
                        <Text style={styles.fullName}> {fullName} </Text>
                        <Text style={styles.homeClub}> {homeClub} </Text>
                    </View>
                    <TouchableOpacity onPress={this.SETTINGS}>
                            <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                    </TouchableOpacity>
                </Image>
                <View >
                    <View style={styles.profileheader}>
                        <Text style={styles.profilesettings}> Profile Settings - Communication </Text>
                    </View>
                        <View>
                            <Text style={{marginLeft:15,marginRight:15,marginTop:5,fontWeight:'500',fontSize:13}} numberOfLines={3}> Set your privacy settings below to control what information you share with your buddies. By default everything is set to sharing.</Text>
                            <View style={{flexDirection:'column',marginTop:15}}>
                                <View style={{flexDirection:'row',marginLeft:10}}>
                                    <View style={{flex:1,alignSelf:'flex-end',}}>
                                        <Switch
                                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                            style={{ transform: [{scaleX: .6}, {scaleY: .6}],flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                            value={this.state.falseSwitchIsOn}
                                            onTintColor ='#BBAA64'
                                            tintColor='#fffaf0'
                                        />
                                    </View>
                                    <Text style={{marginTop:5,fontWeight:'bold',fontSize:12}}> Private(hide for all users)</Text>
                                    <Text style={{marginTop:5,fontWeight:'bold',marginLeft:60,marginRight:30}}>  Private</Text>
                                </View>
                            </View>
                            <View style={{height:2, backgroundColor: "lightgrey",marginTop:10}}></View>
                            <Text style={styles.detailtext}> Chat Settings </Text>
                                <View style={{flexDirection:'column',marginTop:15}}>
                                    <View style={{flexDirection:'row', flex:1}}>
                                        <Text style={styles.detailtext}> Pinned messages</Text>
                                        <View style={{flex:1,alignSelf:'flex-end',}}>
                                        <Switch
                                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                            style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                            value={this.state.falseSwitchIsOn}
                                            onTintColor ='#BBAA64'
                                            tintColor='#fffaf0'
                                        />
                                    </View>
                                    </View>
                                    <Text style={{marginTop:-10,marginLeft:35,marginRight:80,fontSize:13}}> tap and hold any message to pin it,so you can easily find it later</Text>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={styles.detailtext}> Chat wallpaper</Text>
                                        <View style={{flex:1,alignSelf:'flex-end',}}>
                                        <Switch
                                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                            style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                            value={this.state.falseSwitchIsOn}
                                            onTintColor ='#BBAA64'
                                            tintColor='#fffaf0'
                                        />
                                    </View>
                                    </View>
                                    <Text style={{marginTop:-10,marginLeft:35}}> Add customised wallpaper to your chat</Text>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={styles.detailtext}>  Save to camera roll</Text>
                                        <View style={{flex:1,alignSelf:'flex-end',}}>
                                        <Switch
                                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                            style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                            value={this.state.falseSwitchIsOn}
                                            onTintColor ='#BBAA64'
                                            tintColor='#fffaf0'
                                        />
                                    </View>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={styles.detailtext}>  Clear all chats</Text>
                                        <View style={{flex:1,alignSelf:'flex-end',}}>
                                        <TouchableOpacity>
                                            <View style={styles.button}>
                                                <Text style={{color: '#000',textAlign:'center'}}>clear</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:30}}>
                                    <View style={{flexDirection:'row',marginBottom:30}}>
                                        <Text style={styles.detailtext}>  Delete all chats</Text>
                                        <View style={{flex:1,alignSelf:'flex-end',}}>
                                            <TouchableOpacity>
                                                <View style={styles.button}>
                                                    <Text style={{color: '#000',textAlign:'center'}}>delete</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                       </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        height:window.height,
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        backgroundColor:'white',
        borderRadius:  8,
    },
    profileImage: {
        margin:15,
        width: 120,
        height: 120,
        resizeMode:'contain',
        marginTop:-70
    },
    profileheader: {
       height:50,
       backgroundColor:'black',
       borderTopLeftRadius:  10,
       borderTopRightRadius:  10,
       marginTop:-1
    },
    dashImage: {
        width: '100%',
        height: 90,
        resizeMode: 'stretch',
    },
    fullName: {
        textAlign:'center',
        marginLeft:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'transparent',
        marginTop:25
    },
    homeClub: {
        textAlign:'center',
        marginLeft:10,
        fontSize: 15,
        color: 'white',
        backgroundColor:'transparent',
    },
    profilesettings: {
        marginTop:15,
        fontSize: 16,
        fontWeight:'bold',
        color: 'white',
        marginLeft:15,
    },
    detailtext: {
      fontSize: 15,
      color: 'black',
      margin:10,
      marginLeft:20,
      fontWeight:'bold',
      marginBottom:20
    },
    button:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:80,
        height:30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight:20,
        marginBottom:10
    },
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:-35,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
}
