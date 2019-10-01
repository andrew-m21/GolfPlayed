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


export default class Pinassingments extends React.Component  {
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
                        <Text style={styles.profilesettings}> Golf Settings - Pin assingments</Text>
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
                    <Text style={styles.detailtext}> Pin Assingments</Text>
                    <View style={{flexDirection:'column',marginTop:15}}>
                        <View style={{flexDirection:'row',}}>
                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                            <Text style={{marginTop:10,marginLeft:20}}> Courses played </Text>
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

                        <View style={{flexDirection:'row'}}>
                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                            <Text style={{marginTop:10,marginLeft:20}}> Bucketlist</Text>
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
                        <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                            <Text style={{marginTop:10,marginLeft:20}}> Hole in onces </Text>
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
                        <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                            <Text style={{marginTop:10,marginLeft:20}}> Course records </Text>
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
                            <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                            <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                                <Text style={{marginTop:10,marginLeft:20}}> multiple highlights</Text>
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
    flex_column: {
        flexDirection :'column',
        alignItems:'center',

    },
    profileheader: {
       height:50,
       backgroundColor:'black',
       borderRadius:  10,
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
    subtext3: {
      fontSize: 13,
      color: 'grey',
      textAlign:'left',
      width:300,
      margin:2,
      marginLeft:12,
      marginBottom:5
    },
    detailtext: {
      fontSize: 15,
      color: 'black',
      margin:10,
      marginLeft:20,
      fontWeight:'bold',
    },
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:-35,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
    rightArrow:{
        marginTop:10,
        marginLeft:20,
        width: 20,
        height: 20,
    },
}
