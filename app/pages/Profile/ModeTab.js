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


//member area media page



import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';

const {
   
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

const cardPic = require("../../Images/DashImages/clubIcon.png");


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
    };

    MEMBERSAREA = () => {
        //By Harshit
        Actions[MEMBERS_AREA]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            //    <View>
            //      <ImageBackground style={{height:height,width:width}}
            //     source={require("../../Images/tut1_bg.png")}>
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.mainView}>

                        <View style={{
                            marginLeft: 8, marginRight: 8, alignItems: 'center',
                            justifyContent: 'space-between', flexDirection: "row",
                        }}>

                            <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                                <Image
                                    source={cardPic}
                                    resizeMode="contain"
                                    style={{ height: 195, width: 195,borderRadius: 5  }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                                <Image
                                    source={cardPic}
                                    resizeMode="contain"
                                    style={{ height: 195, width: 195,borderRadius: 5  }}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            marginLeft: 8, marginRight: 8, alignItems: 'center',
                            justifyContent: 'space-between', flexDirection: "row",
                        }}>

                            <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                                <Image
                                    source={cardPic}
                                    resizeMode="contain"
                                    style={{ height: 195, width: 195,borderRadius: 5  }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                                <Image
                                    source={cardPic}
                                    resizeMode="contain"
                                    style={{ height: 195, width: 195,borderRadius: 5  }}
                                />
                            </TouchableOpacity>

                        </View>


                    </View>
                </ScrollView>

            </View>
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
    mainView:{
        marginTop:50,
        backgroundColor: "#fff"
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
    
} 