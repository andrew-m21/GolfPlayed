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
    ListView,
    Dimensions,
    ScrollView,
    Switch
  } from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
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
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const profileheading = "Make my profile public";
const profileSubheading = "A private profile is only visible to GolfPlayed buddies";
const profileSettings = "Profile Settings";
const golfSettings = "Golf Settings";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class ProfileSetting extends Component {
    constructor() {
        super();
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

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Image style={styles.dashImage} source={dashImage} >
                    <View style={styles.flex_column}>
                        <Text style={styles.fullName}> {fullName} </Text>
                        <Text style={styles.homeClub}> {homeClub} </Text>
                    </View>
                </Image>
                <View style={styles.header}>
                    <Image style={styles.profileImage} source={profileImage} />
                        <View style={styles.headingcolumn}>
                            <Text style={styles.profileheading}> {profileheading} </Text>
                            <Text style={styles.profileSubheading}> {profileSubheading} </Text>
                        </View>
                        <View style={{alignSelf:'flex-start',marginRight:10}}>
                        <Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                            value={this.state.falseSwitchIsOn}
                            onTintColor ='#BBAA64'
                            tintColor='#fffaf0'
                        />
                    </View>

                </View>
                <View >
                    <View style={styles.profileheader}>
                        <Text style={styles.profilesettings}> {profileSettings} </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.ACCOUNT}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Account </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightbutton}/></View>
                        </TouchableOpacity>
                    <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.PRIVACY_AND_PERMISSION} >
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Privacy & permission </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.COMMUNICATION}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Communication </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <View style={styles.golfheader}>
                        <Text style={styles.profilesettings}> {golfSettings} </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.HOME_COURSE_AND_SOCETIES}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Home course & societies </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                    <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.HANDICAP_AND_STATISTICS}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Handicap & statistics </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.GOLF_BAG}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Golf bag </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]} onPress={this.PIN_ASSINGMENTS}>
                            <View style={styles.listItemInfo}>
                                <Text style={styles.text}> Pin assignments </Text>
                            </View>
                            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
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
        backgroundColor:'white',
        borderRadius:  8,
    },
    flex_column: {
        flexDirection :'column',
        justifyContent: 'space-between',
        marginTop:100

    },
    headingcolumn: {
        flexDirection :'column',
        marginTop:10,
        justifyContent: 'flex-start',
        width:180,
        marginLeft:-15
    },
    Choice:{
        marginRight:20,
        backgroundColor: 'transparent'
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
        justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    profileheader: {
       height:50,
       backgroundColor:'black',
       borderTopLeftRadius:  10,
       borderTopRightRadius:  10,
       marginTop:10
    },
    golfheader: {
        height:50,
        backgroundColor:'black',
        borderTopLeftRadius:  10,
        borderTopRightRadius:  10,
        marginTop:1
    },
    fullName: {
        marginLeft:10,
        fontSize: 18,
        fontWeight: 'bold',
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
        marginTop:10,
        fontSize: 12,
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
    homeClub: {
        marginLeft:10,
        fontSize: 15,
        color: 'white',
        backgroundColor:'transparent',
    },
    dashImage: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
        alignItems:'center'
    },
    listItemInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 5
    },
    badgeContainer:{
        justifyContent:'center',

      },
    rightArrow:{
        resizeMode: 'contain',
        width: 15,
        height: 15,
        backgroundColor: "rgba(187, 170, 100, 0.5)"
      },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        paddingRight:10,
        paddingLeft: 10,
        paddingBottom: 8,
        paddingTop: 8,
        height:50,
      },
}
