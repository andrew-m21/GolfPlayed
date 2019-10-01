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
    Dimensions,ScrollView
  } from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from './ChoiceContainer';
import GenderButtongroup from './GenderButtongroup.js';
const {
    PROFILE_SCREEN,
    ACCOUNT_DETAIL,
    MEMBERS_AREA,
} = RouterScene;
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const profileheading = "Make my profile public";
const profileSubheading = "A private profile is only visible to GolfPlayed buddies";
const profileSettings = "Profile Settings";
const golfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");


export default class Accountdetail extends React.Component  {
  constructor(props) {
    super(props);

        this.state = {
            switchValue: true,
          }
    }
    toggleSwitch = (value) => {
        this.setState({switchValue: value})

    };

    MEMBERSAREA = () => {
      //By Harshit
      Actions[MEMBERS_AREA]()
    };
    ACCOUNT = () => {
        //By Harshit
        Actions[ACCOUNT_DETAIL]()
    };
    ProfileScreen = () => {
      //By harshit
      Actions[PROFILE_SCREEN]()
    };
    render() {
      let handleToUpdate = this.props.handleToUpdate;
        return (
            <View style={styles.container}>
            <ScrollView>
                <Image style={styles.dashImage} source={dashImage} >
                <TouchableOpacity onPress={this.ProfileScreen}>
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
                      <Text style={{color: '#000',textAlign:'center'}}>Edit</Text>
                  </View>
                  </TouchableOpacity>
                  </View>
                </View>
                <View >
                    <View style={styles.profileheader}>
                        <Text style={styles.profilesettings}> {profileSettings} - Account details </Text>
                    </View>
                    <View>
                    <Text style={styles.detailtext}>Set your privacy settings below to control what information you share with your buddies. By default everything is set to sharing. </Text>
                      <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                        <View >
                              <View style={styles.headingcolumn}>

                                  <Text style={styles.profileheading}>{profileheading} </Text>
                                  <Text style={styles.profileSubheading}>{profileSubheading} </Text>
                              </View>
                              <View style = {styles.choiceContainer}>
                                <ChoiceContainer
                                  toggleSwitch1 = {this.toggleSwitch}
                                  switch1Value = {this.state.switchValue}
                                />
                            </View>
                        </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                        <View style={{height:50,margin:5,marginBottom:30}}>
                              <Text style={styles.subtext}>Private [Hide for all Users] </Text>
                              <View style = {styles.choiceContainer1}>
                              <Text style={styles.subtext2}> private </Text>
                            </View>

                            <View  style = {{flexDirection:'row',marginLeft:30}}>
                            <GenderButtongroup style={styles.buttonGroup} first={styles.active} second={styles.normal} />
                            </View>

                            <View style = {styles.choiceContainer}>
                              <ChoiceContainer
                                toggleSwitch1 = {this.toggleSwitch}
                                switch1Value = {this.state.switchValue}
                              />
                            </View>

                        </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                        <View>
                          <TouchableOpacity style={[styles.listItem]}>
                              <View style={styles.item}>
                                <View style={styles.itemmiddle}>
                                  <Text style={styles.text}> First Name  </Text>
                                </View>
                                <View style={styles.itemmiddle}>
                                  <Text style={styles.middletext}> user First Name </Text>
                                </View>
                              </View>

                            </TouchableOpacity>
                        </View>
                    <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Last Name  </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Last Name </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Email </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Email </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Mobile</Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user mobile </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Password</Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonreset}>
                              <Text style={{color: '#000',textAlign:'center'}}>Reset</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Address</Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Address </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> City </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user City </Text>
                              </View>
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Zip </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Zip </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> State </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user State </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Country </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Country </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> Date of birth </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user Date of birth </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.item}>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.text}> College </Text>
                              </View>
                              <View style={styles.itemmiddle}>
                                <Text style={styles.middletext}> user college </Text>
                              </View>
                            </View>

                        </TouchableOpacity>
                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
                        <View style={{height:1, backgroundColor: "lightgrey",}}></View>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.listItem]}>
                            <View style={styles.lastitem}>
                                <Text style={styles.text}> Profile description </Text>
                                <Text style={styles.subtext3}> Profile description[maximum 100 words] </Text>
                            </View>

                        </TouchableOpacity>

                        <View style = {styles.choiceContainer}>
                            <ChoiceContainer
                              toggleSwitch1 = {this.toggleSwitch}
                              switch1Value = {this.state.switchValue}
                            />
                          </View>
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
    choiceContainer:{
      flex:1,
      alignSelf:'flex-end',
      marginRight:20,
      marginTop:-45,
      marginBottom:10
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
        justifyContent: 'center',
        marginTop:55,
        marginLeft:130

    },
    headingcolumn: {
        flexDirection :'column',
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
       marginTop:10
    },
    golfheader: {
        height:50,
        backgroundColor:'black',
        borderRadius:  10,
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
        fontSize: 14,
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
      color: 'grey',
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
      fontSize: 15,
      color: 'black',
      textAlign:'left',
      marginLeft:11
  },
    detailtext: {
      fontSize: 12,
      color: 'black',
      margin:15,
      fontWeight:'400',
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
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin:10,
        height:40,
        flex:1,
      },
      button:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:134,
        height:36,
        paddingTop: 8,
        paddingBottom: 5,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 50,
        marginRight:20
      },
      buttonreset:{
        alignSelf:'flex-end',
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderColor:'black',
        width:134,
        height:36,
        marginTop:-45,
        paddingTop: 8,
        paddingBottom: 5,
        paddingLeft: 6,
        paddingRight: 6,
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
        marginTop:20,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
}
