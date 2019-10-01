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
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';
import TeaTimeTab from './TeaTimeTab.js';

import Tab from './Tabs';
import RoundOne from './RoundOne';
import RoundTwo from './RoundTwo';
import RoundThree from './RoundThree';
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
const cardPic = require("../../Images/DashImages/clubIcon.png");
const userPic = require("../../Images/DashImages/profile.png");



export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            falseSwitchIsOn: true,
            selectedTab: 'one',
            isSelected: "one"
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
    onSelectTab(selectedTab) {
        this.setState({ selectedTab })
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View>
                <Image style={{ height: height, width: width }}
                    source={require("../../Images/tut1_bg.png")}>
                    <View style={styles.container}>
                        <ScrollView>

                            <View style={styles.mainView}>
                                <View style={{ marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableOpacity
                                        style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                                        Make a booking</Text>
                                    <TouchableOpacity
                                        style={{ marginLeft: 10, position: 'absolute', right: 10, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                <View style={{ marginLeft: 15, marginTop: 15, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        What are you booking for?</Text>

                                </View>
                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Golf day</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Function</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{UserName}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{UserSurname}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>

                                <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Book for guests</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Text style={{ color: "#FFF", fontSize: 18, }}>
                                            2</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 15, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Please enter guests information</Text>

                                </View>
                                <View style={{ marginTop: 20, marginLeft: 15, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Guest 1</Text>

                                </View>

                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Golf day</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Function</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{GuestName}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{GuestSurname}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{guest mobile}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{Guest email}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>


                                <View style={{ marginTop: 20, marginLeft: 15, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Guest 2</Text>

                                </View>

                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Golf day</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginRight: 15, marginLeft: 15, marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', }}>

                                    <Text style={{ color: "#FFF", fontSize: 18, }}>
                                        Function</Text>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 30, }}>
                                        <Image style={styles.leftbuttonwhite} source={require("../../Images/closeButton.png")} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{GuestName}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{GuestSurname}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{guest mobile}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"{{Guest email}}"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                <View style={styles.inputWrapper}>

                                    <TextInput style={styles.input}
                                        placeholder={"Special requests"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={{ marginTop:20, alignItems: "center", }}>
                                    <Text style={{ color: "#fff", fontSize: 15 }}>Please use the following details for payment</Text>
                                    <Text style={{ color: "#fff", fontSize: 15 }}>Account number: 5647388564738</Text>
                                    <Text style={{ marginTop: 15, color: "#fff", fontSize: 15, }}>Send proof of payment to the email provided</Text>
                                </View>

                                <TouchableOpacity>
                                    <View style={[styles.rightButton]}>
                                        <Text style={{ textAlign: 'center',
                                          textAlignVertical: 'center',color: 'black',
                                          fontSize: 15, backgroundColor: 'transparent'}}>Book</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                        </ScrollView>
                    </View>
                </Image>
            </View>

        );
    }

}

const styles = {

    container: {
        backgroundColor: 'transparent',
        width: "100%",
        height: window.height - 100,
        paddingBottom: 0,
    },
    mainView: {
        marginTop: 30,
        backgroundColor: 'transparent',

    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 10,
    },
    iconContainer: {
        width: 30,
        height: 30
    },
    inputWrapper: {
        marginTop: 20
    },
    input: {
        backgroundColor: '#F6F6F6',
        width: width - 40,
        height: 45,
        marginHorizontal: 20,
        paddingLeft: 18,
        borderRadius: 20,
        color: '#000',
    },
    buttonGroup: {
        margin: 10
    },
    active: {
        backgroundColor: '#bbaa64',
    },
    normal: {
        backgroundColor: '#fff'
    },

    tabs: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    rightButton: {
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        width: width - 40,
        height: 35,
        marginHorizontal: 20,
        borderRadius: 20,
    },
} 