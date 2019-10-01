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
    Switch, Button
} from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';
import TabPage1 from './TabPage1.js';
import MapView from 'react-native-maps';
import PostOptionPopup from "./PostOptionPopup.js";
import Tab from "./MemberAreaGameRequestedTab/Tabs"
import MyPost from './MemberAreaGameRequestedTab/MyPost';
import Filter from './MemberAreaGameRequestedTab/Filter';
import Saved from './MemberAreaGameRequestedTab/Saved';

const {
    MEMBERS_SECTION_PAGE2,
    MEMBERS_AREA_REQUEST_GAME
} = RouterScene;

const backgroundimage = require('../../Images/tut1_bg.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const clubname = "{{ClubName}}";
const gamerequested = "{{Game Requested}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');

export default class MembersAreaGameRequested extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
            showPostOption: false,
            isSelected:'two',
            selectedTab: "two",
        }
        this.openDialog(true);
    }

    handlePress(i) {
        alert(i)
    };

    onShowPostOption = (show) => {
        this.setState({
          showPostOption: show
        })
    };

    onSelectTab(selectedTab) {
        this.setState({ selectedTab })
    };

    MEMBERS_SECTION_PAGE2 = () => {
        //By Harshit
        Actions[MEMBERS_SECTION_PAGE2]()
    };
    MEMBERS_AREA_REQUEST_GAME = () => {
        //By Harshit
        Actions[MEMBERS_AREA_REQUEST_GAME]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.coverImage} source={dashImage} >
                    <View style={styles.headerView}>
                      <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE2}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                      </TouchableOpacity>
                            <View style={styles.flex_column}>
                                <Text style={styles.fullName}> {clubname} </Text>
                                <Text style={styles.homeClub}> {gamerequested} </Text>
                            </View>
                             <View style={{alignItems:'flex-end',marginTop:30,marginRight:20}}>
                             <TouchableOpacity onPress={this.MEMBERS_AREA_REQUEST_GAME}>
                                <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/plus.png")}/>
                              </TouchableOpacity>
                              </View>                           
                    </View>
                </Image>
                <Image style={{resizeMode:'contain',height:window.height,width:window.width}} source={backgroundimage} >
                    <View style={{ backgroundColor:'transparent',flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        {this.state.isSelected && <View style={[styles.container1, {paddingTop: this.props.padding}]}>
                        <View style={[styles.tabs, {paddingRight: 10, paddingLeft: 10,}]} >
                            <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Filter" id="one" isSelected={this.state.selectedTab == "one"}/>
                            <Tab style={[styles.tab, styles.middleTab]} onTabPress={this.onSelectTab.bind(this)} title="MyPost" id="two" isSelected={this.state.selectedTab == "two"}/>
                            <Tab style={[styles.tab, styles.endTab]} onTabPress={this.onSelectTab.bind(this)} title="Saved" id="three" isSelected={this.state.selectedTab == "three"}/>
                        </View>
                            <Filter onTabPress={this.onSelectTab.bind(this)} title="Filter" id="one" isSelected={this.state.selectedTab == "one"}/>
                            <MyPost onTabPress={this.onSelectTab.bind(this)} title="MyPost" id="three" isSelected={this.state.selectedTab == "two"}/>
                            <Saved onTabPress={this.onSelectTab.bind(this)} title="Saved" id="three" isSelected={this.state.selectedTab == "three"}/>
                        </View>}
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 8,
        height:window.height
    },
    container1: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        borderRadius: 8,
        width:window.width,
        height:window.height, 
        backgroundColor: 'transparent',
    },
    tabs:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
      },
    card: {
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginLeft: 15, marginRight: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    coverImage: {
        width:window.width,
        height: 90,
    },
    mapView: {
        marginTop:10,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    headerView: {
        flexDirection:'row',
        backgroundColor: 'transparent',
        flex:1
      },
    icon: {
        width: 20,
        height: 20,
    },
    map: {
        borderRadius: 10,
        height: 200,
        width: '100%'
    },
    buttonGroup: {
        margin: 10
    },
    active: {
        backgroundColor: '#bbaa64',
    },
    normal: {
        backgroundColor: '#CCCCCC'
    },
    rightArrow:{
        alignSelf:'center',
        marginLeft:(window.width/6)+20,
        width: 20,
        height: 20,
      },
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:30,
        marginLeft:10,
        alignSelf: 'flex-start',
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
    greyFont: {
        color: '#fff',
        height: 45,
        marginLeft: 10,
        marginRight: 10,
    },
    flex_column: {
        flex:1,
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 15,
        marginLeft:80
    },
    fullName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        textAlign:'center'
    },
    homeClub: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign:'center'
    },
} 