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

import Tab from './MembersAreaEventsTeeTimes/Tabs';
import RoundOne from './MembersAreaEventsTeeTimes/RoundOne';
import RoundTwo from './MembersAreaEventsTeeTimes/RoundTwo';
import RoundThree from './MembersAreaEventsTeeTimes/RoundThree';
const {
    MEMBERS_AREA_EVENTS_CREATED
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



export default class MemberAreaTeaTime extends Component {
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

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    MEMBERS_AREA_EVENTS_CREATED = () => {
        //By harshit
        Actions[MEMBERS_AREA_EVENTS_CREATED]()
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

                        <View style={styles.mainView}>
                        <View style={{ marginTop: 10, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity onPress={this.MEMBERS_AREA_EVENTS_CREATED}
                                style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                                Tee Times</Text>
                        </View>
                            <View  style={{ marginTop: 20,}}>
                                {this.state.isSelected && <View style={[styles.container, { paddingTop: this.props.padding }]}>
                                    <View style={[styles.tabs, { paddingRight: 10, paddingLeft: 10, }]} >
                                        <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Round1" id="one" isSelected={this.state.selectedTab == "one"} />
                                        <Tab style={[styles.tab, styles.middleTab]} onTabPress={this.onSelectTab.bind(this)} title="Round2" id="two" isSelected={this.state.selectedTab == "two"} />
                                        <Tab style={[styles.tab, styles.endTab]} onTabPress={this.onSelectTab.bind(this)} title="Round3" id="three" isSelected={this.state.selectedTab == "three"} />
                                    </View>

                                    <RoundOne onTabPress={this.onSelectTab.bind(this)} title="Round1" id="one" isSelected={this.state.selectedTab == "one"} />
                                    <RoundTwo onTabPress={this.onSelectTab.bind(this)} title="Round2" id="two" isSelected={this.state.selectedTab == "two"} />
                                    <RoundThree onTabPress={this.onSelectTab.bind(this)} title="Round3" id="three" isSelected={this.state.selectedTab == "three"} />
                                </View>}
                            </View>

                        </View>

                    </View>
                </Image>
            </View>

        );
    }

}

const styles = {

    container: {
        width: "100%",
        height: "100%",
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
} 