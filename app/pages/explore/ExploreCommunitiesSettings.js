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
    Dimensions, ScrollView
} from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../Profile/ChoiceContainer';
//import GenderButtongroup from './GenderButtongroup.js';
const {
    SETTINGS,
    PROFILE_SCREEN,
    ACCOUNT_DETAIL,
    MEMBERS_AREA,

} = RouterScene;
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{coverP}}";
const homeClub = "{{CommName}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class Accountdetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchValue: true,
        }
    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })

    };

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
                        <TouchableOpacity onPress={this.SETTINGS}>
                            <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                        </TouchableOpacity>
                        <View style={styles.flex_column}>
                            <Text style={styles.fullName}> {fullName} </Text>
                            <Text style={styles.homeClub}> {homeClub} </Text>
                        </View>
                    </Image>
                    <View style={styles.header}>
                        <Image style={styles.profileImage} source={profileImage} />
                        <View style={styles.header1}>
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text style={{ color: '#000', marginLeft: 5 }}>Broadcast</Text>
                                    <Image style={{ marginLeft: 5, marginRight: 5, width: 18, height: 18 }} source={require("../../Images/DashImages/profile.png")} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        <View style={styles.profileheader}>
                            <Text style={styles.profilesettings}>Community settings</Text>
                        </View>
                        <View>

                            <View style={{ marginTop: 15, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>
                                        Community description</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }}>
                                        Community description</Text>
                                    <Text style={{ color: '#000', fontSize: 15 }}>
                                        Maximum 350 characters</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 65, height: 1, backgroundColor: "lightgrey", }}></View>
                            <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>
                                        Community Privacy</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 5, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                        Passowrd</Text>
                                    <Text style={{ color: "#000", fontSize: 15, }}>
                                        Anyone can see the community. its members and their post.</Text>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, }}>
                                    <ChoiceContainer
                                        toggleSwitch1={this.toggleSwitch}
                                        switch1Value={this.state.switchValue}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                        Passowrd</Text>
                                    <Text style={{ color: "#000", fontSize: 15, }}>
                                        Anyone can find the community and see who's in it. Only members can see posts</Text>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, }}>
                                    <ChoiceContainer
                                        toggleSwitch1={this.toggleSwitch}
                                        switch1Value={this.state.switchValue}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                        Passowrd</Text>
                                    <Text style={{ color: "#000", fontSize: 15, }}>
                                        Only members can find the community and see posts.</Text>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, }}>
                                    <ChoiceContainer
                                        toggleSwitch1={this.toggleSwitch}
                                        switch1Value={this.state.switchValue}
                                    />
                                </View>
                            </View>

                            <View style={{ marginTop: 20, height: 1, backgroundColor: "lightgrey", }}></View>
                            <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>
                                        Members</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 5, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andre De Decker</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Helderberg Golf Club</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 15, width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                    <Image style={{ width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                </View>
                            </View>

                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andrew Dunn</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Strand Golf Course</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 15, width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                    <Image style={{ width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                </View>
                            </View>

                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andrew Mcdonald</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Erinvale Golf Club</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 15, width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                    <Image style={{ width: 30, height: 30, borderRadius: 15 }}
                                        source={require("../../Images/DashImages/profile.png")} />
                                </View>
                            </View>

                            <View style={{ marginTop: 5, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <Text style={{ color: "#000", fontSize: 15, }}>
                                        20 456 more...</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20, height: 1, backgroundColor: "lightgrey", }}></View>
                            <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>
                                       Blocked Members</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 5, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andre De Decker</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Helderberg Golf Club</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <View style={styles.MultiButton}>
                                            <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Unblock</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andrew Dunn</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Strand Golf Course</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <View style={styles.MultiButton}>
                                            <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Unblock</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                <View
                                    style={{ position: 'absolute', left: 15, width: 350 }}>
                                    <View
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                            source={require("../../Images/DashImages/profile.png")} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, }}>
                                                Andrew Mcdonald</Text>
                                            <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                                Erinvale Golf Club</Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <View style={styles.MultiButton}>
                                            <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Unblock</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginTop: 5, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                                <View
                                    style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                                    <Text style={{ color: "#000", fontSize: 15, }}>
                                        36 more...</Text>
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
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    choiceContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: -45,
        marginBottom: 10
    },
    choiceContainer1: {
        flex: 1,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: -10,
        marginBottom: 10
    },
    flex_column: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 130

    },
    headingcolumn: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 35,
        width: 200
    },
    Choice: {
        marginRight: 20,
        backgroundColor: 'transparent',
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
    header1: {

        marginTop: 10,
        flex: 1
    },
    innerheader: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    profileheader: {
        height: 50,
        backgroundColor: 'black',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10
    },
    golfheader: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 1
    },
    fullName: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
    },
    profileheading: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    profileSubheading: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 13,
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
    middletext: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 5
    },
    subtext: {
        fontSize: 13,
        color: 'black',
        textAlign: 'left',
        marginLeft: 40,
        marginTop: 5
    },
    subtext2: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right',
    },
    subtext3: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
        marginLeft: 11
    },
    detailtext: {
        fontSize: 12,
        color: 'black',
        margin: 15,
        fontWeight: 'bold',
    },
    homeClub: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    },
    dashImage: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
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
    itemmiddle: {
        justifyContent: 'center',
        alignItem: 'center',
        alignSelf: 'center',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 10,
        height: 40,
        flex: 1,
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight: 20
    },
    buttonreset: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'black',
        width: 80,
        height: 30,
        marginTop: -45,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight: 20
    },
    buttonGroup: {
        margin: 10
    },
    active: {
        backgroundColor: '#bbaa64',
    },
    normal: {
        backgroundColor: 'white'
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 25,
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    MultiButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        height: 35,
        borderRadius: 50,
        margin: 5
    },
} 