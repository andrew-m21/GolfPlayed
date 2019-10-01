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
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import RouterScene from '../../Constant/constant';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';

const { PROFILE_SCREEN, HOME_COURSE_AND_SOCETIES,
  CREATE_NEWS_FEED_POST,
  MEMBERS_AREA_NEWS_FEEDS,
  MEMBERS_SECTION_PAGE2,
  MEMBERS_SECTION_PAGE1
} = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../Images/DashImages/profile.png');
const backgroundimage = require('../../Images/tut1_bg.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname = "{{Erinvale Golf Club}}";
const Totallmembers = "{{20442 Members}}";
const ClubLocation = "{{Cape Town, South Africa}}";
//MembersArea1
export default class MembersArea extends Component {
  constructor() {
    super();
   

    this.state = {
      searchText: '',
      searchHomeFeedText: '',
      switchValue: false,
      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
     
    };
  }

  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  };

  CREATE_NEWS_FEED_POST = () => {
    //By harshit
    Actions[CREATE_NEWS_FEED_POST]()
  };
  HOME_COURSE_AND_SOCETIES = () => {
    //By harshit
    Actions.pop()
  };
  MEMBERS_AREA_NEWS_FEEDS = () => {
    //By harshit
    Actions[MEMBERS_AREA_NEWS_FEEDS]()
  };
  MEMBERS_SECTION_PAGE2 = () => {
    //By harshit
    Actions[MEMBERS_SECTION_PAGE2]()
  };
  MEMBERS_SECTION_PAGE1 = () => {
    //By harshit
    Actions[MEMBERS_SECTION_PAGE1]()
  };

  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
          <View>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={this.HOME_COURSE_AND_SOCETIES}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>
              <Text style={styles.memberSection}> Create Event </Text>
            </View>
            <ScrollView style={{ height: window.height + 100 }}>
                <View style={{ flexDirection: 'row', flex: 1 ,marginTop:5}}>
                  <Text style={{ color: 'white',marginLeft: 30, fontSize: 15,  backgroundColor: 'transparent', textAlign: 'left' }}>Golfday </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 25}}>
                    <Text style={{ color: 'white', fontSize: 15, backgroundColor: 'transparent', textAlign: 'right' }}> Public </Text>
                  </View>
                </View>
              <View style={styles.innerView}>
                <Image style={styles.coverImage1} source={dashImage} >
                  <View style={styles.nameView}>
                    <Text style={styles.fullName}> Upload an image of your event </Text>
                  </View>
                </Image>
                <View style={{ height: 130, backgroundColor: 'white', marginTop: -20, borderRadius: 10, }}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.greyFont}
                      placeholder={'Event Title'}
                      underlineColorAndroid={'transparent'}
                      clearButtonMode={'while-editing'}
                    />
                    <View style={{ height: .5, backgroundColor: "black", marginLeft: 20, marginRight: 20, }}></View>
                  </View>

                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.greyFont}
                      placeholder={'Location'}
                      underlineColorAndroid={'transparent'}
                      clearButtonMode={'while-editing'}
                    />
                    <View style={{ height: .5, backgroundColor: "black", marginLeft: 20, marginRight: 20,}}></View>
                  </View>
                </View>
              </View>

              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Event time'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Max number of guests per invitee'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer2}>
                <TextInput
                  multiline={true}
                  style={styles.greyFont2}
                  placeholder={'Event description'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Email'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Contact number'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 10 }}></View>
              <View style={styles.inputContainer2}>
                <TextInput
                  multiline={true}
                  style={styles.greyFont2}
                  placeholder={'Payment instractions'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 10 }}></View>
              <Text style={{ color: 'white', textAlign: 'left', margin: 10, marginLeft: 30, fontSize: 20, marginTop: 20, backgroundColor: 'transparent' }}> Timesheet </Text>
              <View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'left' }}> Start Time </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 20 }}>
                    <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'right' }}> 8.00 </Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 5, marginRight: 20, marginLeft: 30 }}></View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'left' }}> Intervals </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 20 }}>
                    <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'right' }}> 7 </Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 5, marginRight: 20, marginLeft: 30 }}></View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'left' }}> No. of tees </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 20 }}>
                    <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'right' }}> 2 </Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 5, marginRight: 20, marginLeft: 30 }}></View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'left' }}> No. of times </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 20 }}>
                    <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'right' }}> 14 </Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 5, marginRight: 20, marginLeft: 30 }}></View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'left' }}> Format </Text>
                  <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, marginRight: 20 }}>
                    <Text style={{ color: 'white', margin: 10, marginLeft: 30, fontSize: 15, marginTop: 20, backgroundColor: 'transparent', textAlign: 'right' }}> Better ball </Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 5, marginRight: 20, marginLeft: 30,marginBottom:10 }}></View>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:5 }}>Create Event</Text>
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
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    marginBottom: 15,
    backgroundColor: '#3B3A3A',
    borderRadius: 8,
    height: window.height
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  profileImage: {
    width: 70,
    height: 70,
    marginLeft: 20,
    marginBottom: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginLeft: 10,
    borderRadius: 2,
    borderColor: '#fff',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
  },
  greyFont: {
    color: '#fff',
    height: 45,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer1: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20, marginTop: 10,
    marginBottom: 10
  },
  inputContainer2: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5
  },
  greyFont1: {
    color: '#7f7f7f',
    height: 40,
    marginLeft: 10,
    marginRight: 10,

  },
  greyFont2: {
    color: '#7f7f7f',
    height: 100,
    marginLeft: 10,
    marginRight: 10,

  },
  coverImage: {
    width: window.width,
    height: window.height,
    resizeMode: 'contain',
    alignItems: 'flex-start'
  },
  coverImage1: {
    width: window.width - 40,
    height: 200,
    borderRadius: 10,
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  innerView: {
    marginRight:20,
    marginLeft: 20,
  },
  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  fullName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 70,
    marginBottom: 1,
    backgroundColor: 'transparent',
    marginLeft: 10
  },
  memberSection: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: window.width / 3.5,
    marginTop: 20,
  },
  homeClub: {
    marginLeft: 10,
    fontSize: 13,
    color: 'white',
    backgroundColor: 'transparent'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding: {
    marginBottom: 10,
  },
  listItemImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
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
  badge: {
    color: 'black',
    backgroundColor: '#bbaa64',
    borderRadius: 10,
    padding: 5,
    fontSize: 12,
  },
  rightArrow: {
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  button:{
    alignSelf:'center',
    backgroundColor: 'lightgrey',
    borderWidth:1,
    borderColor:'black',
    width:window.width-40,
    height:40,
    borderRadius:50,
    marginRight:40,
    marginLeft:40,
    marginBottom:70
},
}
