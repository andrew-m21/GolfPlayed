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

const userPic = require("../../Images/DashImages//profile.png");
const datas = [
    {
        userPic: userPic,
        name: "Michael Moody",
        friends: "28 mutual friends-South Africa",
        function: "Function only",
    },
    {
        userPic: userPic,
        name: "Michael de Meer",
        friends: "28 mutual friends-South Africa",
        function: "Function only",
    },
    {
        userPic: userPic,
        name: "Michael van den Heerik",
        friends: "28 mutual friends-South Africa",
        function: "",
    },
    {
        userPic: userPic,
        name: "Michael Xandria",
        friends: "28 mutual friends-South Africa",
        function: "",
    },
];

export default class MemberAreaDinner extends Component {
    constructor() {
        super();
        this.state = {
            falseSwitchIsOn: true,
        }
        this.openDialog(true);
    }
    openDialog(show) {
        this.setState({ showDialog: show })
    }
    MEMBERS_AREA_EVENTS_CREATED = () => {
        //By Harshit
        Actions[MEMBERS_AREA_EVENTS_CREATED]()
    };

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View>
                <Image style={{ height: height, width: width }}
                    source={require("../../Images/tut1_bg.png")}>
                    <View style={styles.container}>

                        
                            <View style={styles.mainView}>

                                <View style={{ marginTop: 5, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableOpacity onPress={this.MEMBERS_AREA_EVENTS_CREATED}
                                        style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                                        Function details</Text>
                                        <View
                                        style={{ marginLeft: 10, position: 'absolute', right: 10, }}>
                                         <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, }}>
                                        Invite</Text>
                                    </View>
                                </View>

                                <View style={{ marginLeft:10,marginRight:10,marginTop:30,height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                <ListView
                                    enableEmptySections={true}
                                    dataSource={ds.cloneWithRows(datas)}
                                    renderRow={(rowData) =>

                                        <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 15, marginRight: 15, }}>

                                            <Image
                                                style={{ height: 60, width: 60, borderRadius: 60 }}
                                                source={rowData.userPic} />

                                            <View style={{ marginLeft:10,width: 200 }}>
                                                <Text style={{  color: "#fff", fontSize: 18, }}>{rowData.name}</Text>
                                                <Text style={{ color:"#BCAB64", fontSize: 14, }}>{rowData.friends}</Text>
                                            </View>

                                            <View style={{ position: 'absolute', right: 0, }}>
                                                <Text style={{ color: "#fff",
                                                    marginLeft: 5, fontSize: 18,
                                                }}>{rowData.function}</Text>
                                            </View>
                                            <View style={{ marginRight: 10, marginLeft: 20, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                        </View>
                                    } />
                            </View>
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
        backgroundColor: 'transparent',
        borderRadius: 8,
        height:'100%'
    },
    mainView: {
        marginTop: 30,
        backgroundColor: 'transparent',
        height:'100%'
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
} 