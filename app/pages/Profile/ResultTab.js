import React, { Component } from 'react'
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
    ListView,
    Dimensions,
    ScrollView,
    Switch, Button, ImageBackground
} from 'react-native';


//member area Result page


import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';

import EventTab1 from './EventTab1.js';
import EventTab2 from './EventTab2.js';
import EventTab3 from './EventTab3.js';
import MapView from 'react-native-maps';
const {
    COMMUNICATION,
    HOME_COURSE_AND_SOCETIES,
    PIN_ASSINGMENTS,
    ACCOUNT_DETAIL,
    MEMBERS_AREA,
    PRIVACY_AND_PERMISSION,
    HANDICAP_AND_STATISTICS,
    GOLF_BAG
} = RouterScene;

const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{Invite guests}}";
const homeClub = "{{homeClub}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const userPic = require("../../Images/DashImages/profile.png");
const favPic = require("../../Images/DashImages/arrowDownButton.png");


const userData = [
    {
        pos: 5,
        userPic: userPic,
        userName: "{{MyName}}",
        total: 13,
        favPic: favPic,
    },
    
];
const favData = [
    {
        pos: 5,
        userPic: userPic,
        userName: "{{MyName}}",
        total: 5,
        favPic: favPic,
    },
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 4,
        favPic: favPic,
    },
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 5,
        favPic: favPic,
    },
    
];
const datas = [
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 3,
        favPic: favPic,
    },
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 10,
        favPic: favPic,
    },
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 5,
        favPic: favPic,
    },
    {
        pos: "T2",
        userPic: userPic,
        userName: "{{UserName}}",
        total: 6,
        favPic: favPic,
    },
    {
        pos: "T2",
        userPic: userPic,
        userName: "{{UserName}}",
        total: 3,
        favPic: favPic,
    },
    {
        pos: 4,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 6,
        favPic: favPic,
    },
    {
        pos: 5,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 2,
        favPic: favPic,
    },
    {
        pos: 6,
        userPic: userPic,
        userName: "{{UserName}}",
        total: 8,
        favPic: favPic,
    }
];

export default class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            falseSwitchIsOn: true,
        }
        this.openDialog(true);
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
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
    PRIVACY_AND_PERMISSION = () => {
        //By Harshit
        Actions[PRIVACY_AND_PERMISSION]()
    };
    HANDICAP_AND_STATISTICS = () => {
        //By Harshit
        Actions[HANDICAP_AND_STATISTICS]()
    };
    GOLF_BAG = () => {
        //By Harshit
        Actions[GOLF_BAG]()
    };
    PIN_ASSINGMENTS = () => {
        //By Harshit
        Actions[PIN_ASSINGMENTS]()
    };
    HOME_COURSE_AND_SOCETIES = () => {
        //By Harshit
        Actions[HOME_COURSE_AND_SOCETIES]()
    };
    COMMUNICATION = () => {
        //By Harshit
        Actions[COMMUNICATION]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    ProfileScreen = () => {
        //By harshit
        Actions[PROFILE_SCREEN]()
    };
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            //    <View>
            //      <ImageBackground style={{height:height,width:width}}
            //     source={require("../../Images/tut1_bg.png")}>
            <View style={styles.container}>

                <ScrollView>
                   
                        <TouchableOpacity onPress={this.ProfileScreen}>
                            <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                        </TouchableOpacity>
                 

                    <View>

                        <View style={{ paddingTop: 10 }}>


                            
                        </View>

                    </View>
                </ScrollView>

            </View>
            //      </ImageBackground>
            //    </View> 
        );
    }
}

const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        backgroundColor: '#B2B2B2',
        borderRadius: 8,
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 25,
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    iconContainer: {
        width: 30,
        height: 30
    },
    inputWrapper: {
        marginTop: 40
    },
    input: {
        backgroundColor: '#F6F6F6',
        width: width - 40,
        height: 45,
        marginHorizontal: 20,
        paddingLeft: 18,
        borderRadius: 5,
        color: '#000',
    },
    inputContainer: {
        justifyContent: "center",
        height: 45, width: 250,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 24,
        backgroundColor: '#CCCCCC',
        borderRadius: 50,
        margin: 20
    },
   
} 