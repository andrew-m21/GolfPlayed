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
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
import EventTabTop from './MemberAreaEventCreated/EventTabTop.js';
import EventTabCenter from './MemberAreaEventCreated/EventTabCenter.js';

import Tab from "./MemberAreaEventCreated/Tabs"
import MyPost from './MemberAreaEventCreated/MyPost';
import Filter from './MemberAreaEventCreated/Filter';
import Saved from './MemberAreaEventCreated/Saved';

const {
    MEMBERS_SECTION_PAGE2
} = RouterScene;

const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const backgroundimage = require('../../Images/tut1_bg.png');
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class MembersAreaEventscreated extends Component {
    constructor() {
        super();
        this.state = {
            falseSwitchIsOn: true,
            isSelected:'two',
            selectedTab:'two',
        }
        this.openDialog(true);
    }
    // componentDidMount(){
    //    this.openDialog(true);
    // }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    };
    onSelectTab(selectedTab) {
        this.setState({ selectedTab })
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
    MEMBERS_SECTION_PAGE2 = () => {
        //By Harshit
        Actions[MEMBERS_SECTION_PAGE2]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    
    render() {
        return (
            <View style={styles.container}>
              <Image style={styles.coverImage} source={backgroundimage} >
                <View style={styles.headerView}>
                      <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE2}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                      </TouchableOpacity>
                        <Text style={styles.fullName}> Event </Text>
                             <View style={{alignItems:'flex-end',marginTop:30,marginRight:20}}>
                             {/* <TouchableOpacity onPress={this.MEMBERS_AREA_REQUEST_GAME}>
                                <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/plus.png")}/>
                              </TouchableOpacity> */}
                              </View>                           
                </View>
                <ScrollView>
                    <View>
                        <Dialog
                            visible={this.state.showDialog}
                            title=""
                            onTouchOutside={() => this.openDialog(false)}
                            contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                            animationType="fade"
                            onTouchOutside={() => this.setState({ dialogVisible: false })}>
                            <Image
                                source={require("../../Images/tut1_logo.png")}
                                resizeMode="contain"
                                resizeMethod="scale"
                                style={{ height: 80, width: 300 }} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.greyFont}
                                    placeholder={'Write something....'}
                                    value={''}
                                    underlineColorAndroid={'transparent'}
                                    clearButtonMode={'while-editing'}
                                />
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: 'space-between', width: 300 }}>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, color: "#92C4BD", fontWeight: "bold" }}>Ok</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.openDialog(false)} style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, color: "#92C4BD", fontWeight: "bold" }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </Dialog>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                            <EventTabTop style={styles.buttonGroup} first={styles.normal} second={styles.normal} />
                        </View>

                        <View>
                            <View style={{ alignSelf: 'stretch', marginLeft: 10, marginRight: 10, }}>
                                <View >
                                    <Image
                                        style={{
                                            marginRight: 10,
                                            width: width - 20,
                                            height: 200,

                                        }}
                                        source={dashImage} >
                                        <View style={{ borderRadius: 60, backgroundColor: "#1A210A", height: 60, width: 60, alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, }}>
                                                Step</Text>
                                            <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, }}>
                                                13</Text>
                                        </View>
                                    </Image>

                                    <View style={{ width: '100%', backgroundColor: "#fff", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                                       <View style={{marginRight:10,marginLeft:10,}}>
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>CPT golf day</Text><Text style={{ fontSize: 14, marginRight: 10 }}>3.2miles</Text>
                                        </View>
                                        <Text style={{ fontSize: 14, }}>Erinvale Golf Club Erinvale Golf Club</Text>
                                        <Text style={{ fontSize: 17, }}>Cape Town, South Africa, South Africa</Text>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Image
                                                source={require("../../Images/clock.png")}
                                                resizeMode="contain"
                                                resizeMethod="scale"
                                                style={{ height: 24, width: 24 }} />
                                            <Text style={{ fontSize: 17, }}>9AM - 5PM</Text>

                                        </View>
                                      </View>
                                    </View>

                                </View>
                            </View>
                        </View>


                        <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center", marginLeft: 10, marginRight: 10, }}>

                            <Text style={{ color:'white',marginTop: 10, fontWeight: 'bold', color:'white' , fontSize: 18, backgroundColor: 'transparent', }}>
                                Cape Town, South Africa, South Africa</Text>
                            <View style={{ color:'white',
                                marginTop: 10, width: width, justifyContent: 'space-around',
                                flexDirection: 'row', backgroundColor: 'transparent',
                            }}>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity style={{ marginLeft: 0, }}>
                                        <Image source={require("../../Images/email-outline.png")} style={styles.iconContainer} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold',color:'white' , fontSize: 15, }}>
                                        Email</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity >
                                        <Image source={require("../../Images/phone-call.png")} style={styles.iconContainer} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color:'white' , fontSize: 15, }}>
                                        Call</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity >
                                        <Image source={require("../../Images/email-outline.png")} style={styles.iconContainer} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color:'white' , fontSize: 15, }}>
                                        Cart</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity
                                        style={{ marginRight: 0, }}>
                                        <Image source={require("../../Images/email-outline.png")} style={styles.iconContainer} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color:'white' , fontSize: 15, }}>
                                        Phone</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity
                                        style={{ marginRight: 0, }}>
                                        <Image source={require("../../Images/next.png")} style={styles.iconContainer} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color:'white' , fontSize: 15, }}>
                                        More</Text>
                                </View>

                            </View>


                            <Text style={{ marginTop: 10, fontWeight: 'bold', color:'white' , fontSize: 18, backgroundColor: 'transparent',color:'white' }}>
                                Cape Town, South Africa, South Africa</Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', color:'white' , fontSize: 18, backgroundColor: 'transparent',color:'white' }}>
                                Cape Town, South Africa, South Africa</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                            <EventTabCenter style={styles.buttonGroup} first={styles.normal} second={styles.normal} />
                        </View>
                                <View style={{ backgroundColor:'transparent',flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                                    {this.state.isSelected && <View style={[styles.container1, {paddingTop: this.props.padding}]}>
                                    <View style={[styles.tabs, {paddingRight: 10, paddingLeft: 10,}]} >
                                        <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Event Wall" id="one" isSelected={this.state.selectedTab == "one"}/>
                                        <Tab style={[styles.tab, styles.middleTab]} onTabPress={this.onSelectTab.bind(this)} title="Media" id="two" isSelected={this.state.selectedTab == "two"}/>
                                        <Tab style={[styles.tab, styles.endTab]} onTabPress={this.onSelectTab.bind(this)} title="Results" id="three" isSelected={this.state.selectedTab == "three"}/>
                                    </View>
                                        <Filter onTabPress={this.onSelectTab.bind(this)} title="Event Wall" id="one" isSelected={this.state.selectedTab == "one"}/>
                                        <MyPost onTabPress={this.onSelectTab.bind(this)} title="Media" id="three" isSelected={this.state.selectedTab == "two"}/>
                                    <Saved onTabPress={this.onSelectTab.bind(this)} title="Results" id="three" isSelected={this.state.selectedTab == "three"}/>
                                </View>}
                            </View>
                        </View>
                    </ScrollView>
                </Image>
            </View>
        );
    }
}

const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height:height
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
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:20,
        marginLeft:10,
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
    card: {
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: "#CCCCCC",
        marginLeft: 15, marginRight: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    mapView: {
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        borderRadius: 10,
        height: 200,
        width: '100%'
    },
    buttonGroup: {
        margin: 10
    },
    headerView: {
        flexDirection:'row',
        backgroundColor: 'transparent',
        height:40
      },
    active: {
        backgroundColor: '#bbaa64',
    },
    normal: {
        backgroundColor: '#fff'
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
        flex:.2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headingcolumn: {
        flexDirection: 'column',
        marginTop: 10,
        justifyContent: 'flex-start',
        width: 180,
        marginLeft: -15
    },
    Choice: {
        marginRight: 20,
        backgroundColor: 'transparent'
    },
    profileImage: {
        margin: 15,
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginTop: -70
    },
    header: {
        flexDirection: 'row',
        marginTop: 10
    },
    profileheader: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 10,
    },
    golfheader: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 1
    },
    fullName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        textAlign:'center',
        marginTop:20,
        marginLeft:130,
    },
    profileheading: {
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    profileSubheading: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
        backgroundColor: 'transparent',
    },
    profilesettings: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
    },
    text: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: 5
    },
    homeClub: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
    },
    dashImage: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
    },
    listItemInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 5
    },
    badgeContainer: {
        justifyContent: 'center',

    },
    rightArrow: {
        resizeMode: 'contain',
        width: 15,
        height: 15,
        backgroundColor: "rgba(187, 170, 100, 0.5)"
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 8,
        paddingTop: 8,
        height: 50,
    },
    coverImage: {
        width: window.width,
        height: window.height,
        resizeMode: 'contain',
       
      },
} 