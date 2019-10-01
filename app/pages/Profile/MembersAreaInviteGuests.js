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

import EventTabTop from './MemberAreaEventCreated/EventTabTop.js';
import EventTabCenter from './MemberAreaEventCreated/EventTabCenter.js';
import EventTabButtom from './MemberAreaEventCreated/EventTabButtom.js';

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

const datas = [
    {
        text: "James Martin",
    },
    {
        text: "Jessica Smith",
    },
    {
        text: "Darryl Loots",
    },
    {
        text: "Pepper Bullock",
    },
    {
        text: "Ian Allen",
    },
    {
        text: "Joe Brim",
    },
    {
        text: "Jeff Smith",
    },
    {
        text: "Caroll Swan",
    }
];

export default class MembersAreaInviteGuests extends Component {
    constructor() {
        super();
        this.state = {
            falseSwitchIsOn: true,
        }
        this.openDialog(true);
    }

    MEMBERS_AREA_EVENTS_CREATED = () => {
        //By Harshit
        Actions[MEMBERS_AREA_EVENTS_CREATED]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View style={styles.container}>

               
                    <Image style={styles.dashImage} source={dashImage} >
                        <TouchableOpacity onPress={this.MEMBERS_AREA_EVENTS_CREATED}>
                            <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                        </TouchableOpacity>
                        <View style={styles.flex_column}>
                            <Text style={styles.fullName}> {fullName} </Text>

                        </View>
                    </Image>

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


                        <View style={{ paddingTop: 20 }}>


                            <View style={{ marginRight:15,marginTop: 15, alignItems: 'center', flexDirection: "row", }}>
                                <View >
                                    <TextInput style={{
                                         color: '#000', width: 250,borderRadius: 5,
                                        height: 45, marginHorizontal: 20, paddingLeft: 18, 
                                    }}
                                        placeholder={"Search"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={{ position: 'absolute', right: 0, }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={require("../../Images/closeButton.png")}
                                            resizeMode="contain"
                                            resizeMethod="scale"
                                            style={{ height: 23, width: 23, borderRadius: 23 }} />
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            <View style={{ marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                            <ListView
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(datas)}
                                renderRow={(rowData) =>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15, }}>

                                        <Image
                                            style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={require("../../Images/addperson.png")} />

                                        <Text style={{ marginLeft: 5, fontSize: 18, }}>{rowData.text}</Text>

                                        <TouchableOpacity style={{ position: 'absolute', right: 0, }}>
                                            <Image
                                                style={{ height: 30, width: 30, borderRadius: 30 }}
                                                source={require("../../Images/plus.png")} />
                                        </TouchableOpacity>
                                        <View style={{ marginRight: 10, marginLeft: 20, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                    </View>

                                } />
                        </View>
                    </View>
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
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height:window.height,
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 20,
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
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 130
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
} 