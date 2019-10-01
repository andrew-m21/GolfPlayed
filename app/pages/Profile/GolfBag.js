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


export default class GolfBag extends React.Component  {
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
                        <Text style={styles.profilesettings}> Golf Settings - Golf bag </Text>
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
                            <Text style={styles.detailtext}> Home course & societies </Text>
                                <View style={{flexDirection:'column',marginTop:15}}>
                                    <View style={{flexDirection:'row', flex:1}}>
                                        <Text style={styles.detailtext}> Home course</Text>
                                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/plus.png")}/>
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
                                    <Text style={{marginTop:-10,marginLeft:35}}> userHomecourse1</Text>
                                    <Text style={{marginLeft:35}}> userHomecourse2</Text>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={styles.detailtext}> golf societies</Text>
                                        <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/plus.png")}/>
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
                                    <Text style={{marginTop:-10,marginLeft:35}}> userSociety2</Text>
                                    <Text style={{marginLeft:35}}> userSociety2</Text>
                                </View>
                                <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={styles.detailtext}>  Online golf clubs </Text>
                                        <Image style={styles.rightArrow1} source={require("../../Images/DashImages/buttons/plus.png")}/>
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
                                    <Text style={{marginTop:-10,marginLeft:35}}> userOnlineclub1</Text>
                                    <Text style={{marginLeft:35}}> userOnlineclub2</Text>
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
    choiceContainer:{
      flex:1,
      alignSelf:'flex-end',
      marginRight:20,

    },
    choiceContainer1:{
      flex:1,
      alignSelf:'flex-end',
      marginRight:20,
      marginTop:-10,
      marginBottom:10
    },
    flex_column: {
        flexDirection :'column',
        alignItems:'center',

    },
    headingcolumn: {
        flexDirection :'row',
        marginTop:5,
        marginLeft:35,
        width:200
    },
    rightArrow:{
        alignSelf:'center',
        marginLeft:(window.width/6)+20,
        width: 20,
        height: 20,
    },
    rightArrow1:{
         alignSelf:'center',
         marginLeft:(window.width/6)-10,
         width: 20,
         height: 20,
    },
    Choice:{
        marginRight:20,
        backgroundColor: 'transparent',
    },
    profileImage: {
        margin:15,
        width: 120,
        height: 120,
        resizeMode:'contain',
        marginTop:-70
    },
    header: {
        flexDirection: 'row',
        marginTop:10
    },
    header1: {

        marginTop:10,
        flex:1
    },
    innerheader: {
        flex:1,
        flexDirection:'row',
        margin:5
    },
    profileheader: {
       height:50,
       backgroundColor:'black',
       borderRadius:  10,
       marginTop:-1
    },
    golfheader: {
        height:50,
        backgroundColor:'black',
        borderRadius:  10,
        marginTop:1
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
    profileheading: {
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor:'transparent',
    },
    profileSubheading: {
        marginTop:5,
        marginBottom:10,
        fontSize: 13,
        fontWeight: '400',
        color: 'black',
        backgroundColor:'transparent',
    },
    profilesettings: {
        marginTop:15,
        fontSize: 16,
        fontWeight:'bold',
        color: 'white',
        marginLeft:15,
    },
    text: {
        fontSize: 15,
        color: 'black',
        marginLeft:10,
        fontWeight:'bold',
        marginBottom:5
    },
    middletext: {
      fontSize: 14,
      color: 'black',
      textAlign:'center',
      marginLeft:10,
      marginBottom:5
    },
    subtext: {
        fontSize: 13,
        color: 'black',
        textAlign:'left',
        marginLeft:40,
        marginTop:5
    },
    subtext2: {
        fontSize: 15,
        color: 'black',
        textAlign:'right',
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
    item: {
        flexDirection: 'row',

        paddingLeft: 5
    },
    lastitem: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingLeft: 5
    },
    firstitem: {
        flexDirection: 'column',
      },
    itemmiddle: {
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin:10,
        height:90,
        flex:1,
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
        marginRight:20
      },
      buttonreset:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:80,
        height:30,
        marginTop:-45,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight:20
      },
      buttonGroup: {
        margin:10
      },
      active: {
        backgroundColor: '#bbaa64',
      },
      normal: {
        backgroundColor: 'white'
      },
      leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:-35,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
}
