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
    ListView,Switch,
    Dimensions,ScrollView
  } from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from './ChoiceContainer';
import GenderButtongroup from './GenderButtongroup.js';
const {

    ACCOUNT_DETAIL,
    MEMBERS_AREA,
    SETTINGS

} = RouterScene;
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const golfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class PrivacyAndPermission extends React.Component  {
  constructor(props) {
    super(props);

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

                    <View style={styles.flex_column}>
                        <Text style={styles.fullName}> {fullName} </Text>
                        <Text style={styles.homeClub}> {homeClub} </Text>
                    </View>
                    <TouchableOpacity onPress={this.SETTINGS}>
                            <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                    </TouchableOpacity>
                </Image>
                <View >
                    <View style={styles.profileheader}>
                        <Text style={styles.profilesettings}> {profileSettings} -Privacy & Permission </Text>
                    </View>
                    <View>
                    <Text style={styles.detailtext}> Account privacy </Text>
                    <View style={{flexDirection:'column',marginTop:15,}}>
                        <View style={{flexDirection:'row',flex:1,alignSelf:'flex-end',}}>
                            <Text style={{marginLeft:30,marginTop:5,fontWeight:'bold'}}>  Private Account </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,fontSize:13}}>When your account is private only people you approve can see your photos and videos on GolfPlayed.{'\n'}Your existing buddies won't be affected. </Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> Posts only visible to buddies </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,}}>Only your golf buddies will be able to see your posts.</Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> Allow to be tagged </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,width:window.width-100,}}> only your golf buddies will be able to posts</Text>
                    </View>
                    <View style={{height:2, backgroundColor: "lightgrey",}}></View>
                    <Text style={styles.detailtext}> Direct messages </Text>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginTop:10,marginLeft:35}}> Recive message from anyone </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>

                        </View>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginTop:10,marginLeft:35}}> Show read receipts  </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>

                        </View>
                        <View style={{height:2, backgroundColor: "lightgrey",}}></View>
                        <Text style={styles.detailtext}> Discoverability & contacts</Text>
                            <View style={{flexDirection:'row',}}>
                                <Text style={{marginTop:10,marginLeft:35}}> Let others find me by email</Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:'row',}}>
                            <Text style={{marginTop:10,marginLeft:35}}>Let others find me by phone  </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>

                            </View>
                            <View style={{flexDirection:'row',}}>
                            <Text style={{marginTop:10,marginLeft:35}}>Sync my phone contacts   </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>

                            </View>
                    <View style={{height:2, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <Text style={styles.detailtext}> Safety</Text>
                        <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                            <View style={{flexDirection:'row',}}>
                                <Text style={{marginLeft:35,fontWeight:'bold'}}> Blocked accounts </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                            </View>
                            <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,width:window.width-100,}}> blockedUsers1</Text>
                            <Text style={{marginLeft:35,marginTop:5,width:window.width-100,width:window.width-100,}}> blockedUsers1</Text>
                        </View>
                        <View style={{height:2, backgroundColor: "lightgrey",}}></View>
                        <Text style={styles.detailtext}> Permissions </Text>
                    <View style={{flexDirection:'column',marginTop:15}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:30,marginTop:5,fontWeight:'bold'}}>  Location </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,fontSize:13}}> Allow the Applications to use device's location</Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> SMS</Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,}}>Uses SMS and MMS. Charges may appy</Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> Photos, videos and media files </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,width:window.width-100,}}> Uses image ,audio and video files on both devices and external storage</Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15,marginBottom:10}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> Camera </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,width:window.width-100,}}> Uses the device's camera's</Text>
                    </View>
                    <View style={{flexDirection:'column',marginTop:15,marginBottom:30}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{marginLeft:35,fontWeight:'bold'}}> Microphone </Text>
                                <View style={{flex:1,alignSelf:'flex-end',}}>
                                    <Switch
                                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                        style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginBottom:10,marginTop:-5,marginRight:20}}
                                        value={this.state.falseSwitchIsOn}
                                        onTintColor ='#BBAA64'
                                        tintColor='#fffaf0'
                                    />
                                </View>
                        </View>
                        <Text style={{marginLeft:35,marginTop:-5,width:window.width-100,width:window.width-100,}}> Uses the devices microphone</Text>
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
    choiceContainer:{
      flex:1,
      alignSelf:'flex-end',
      marginRight:20,

    },
    choiceContainer1:{
      flex:1,
      alignSelf:'flex-end',
      marginRight:20,
      marginTop:-10,
      marginBottom:10
    },
    flex_column: {
        flexDirection :'column',
        alignItems:'center',

    },
    headingcolumn: {
        flexDirection :'row',
        marginTop:5,
        marginLeft:35,
        width:200
    },
    Choice:{
        marginRight:20,
        backgroundColor: 'transparent',
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
        marginTop:10
    },
    header1: {

        marginTop:10,
        flex:1
    },
    innerheader: {
        flex:1,
        flexDirection:'row',
        margin:5
    },
    profileheader: {
       height:50,
       backgroundColor:'black',
       borderTopLeftRadius:  10,
       borderTopRightRadius:  10,
       marginTop:-1
    },
    golfheader: {
        height:50,
        backgroundColor:'black',
        borderRadius:  10,
        marginTop:1
    },
    dashImage: {
        width: '100%',
        height: 90,
        resizeMode: 'stretch',
    },
    fullName: {
        textAlign:'center',
        marginLeft:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'transparent',
        marginTop:25
    },
    homeClub: {
        textAlign:'center',
        marginLeft:10,
        fontSize: 15,
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
        marginTop:5,
        marginBottom:10,
        fontSize: 13,
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
    middletext: {
      fontSize: 14,
      color: 'black',
      textAlign:'center',
      marginLeft:10,
      marginBottom:5
    },
    subtext: {
        fontSize: 13,
        color: 'black',
        textAlign:'left',
        marginLeft:40,
        marginTop:5
    },
    subtext2: {
        fontSize: 15,
        color: 'black',
        textAlign:'right',
    },
    subtext3: {
      fontSize: 13,
      color: 'grey',
      textAlign:'left',
      width:300,
      margin:2,
      marginLeft:12,
      marginBottom:5
    },
    detailtext: {
      fontSize: 15,
      color: 'black',
      margin:10,
      marginLeft:20,
      fontWeight:'bold',
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
    firstitem: {
        flexDirection: 'column',
      },
    itemmiddle: {
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin:10,
        height:90,
        flex:1,
      },
      button:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:80,
        height:30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight:20
      },
      buttonreset:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:80,
        height:30,
        marginTop:-45,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 50,
        marginRight:20
      },
      buttonGroup: {
        margin:10
      },
      active: {
        backgroundColor: '#bbaa64',
      },
      normal: {
        backgroundColor: 'white'
      },
      leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:-35,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
}
