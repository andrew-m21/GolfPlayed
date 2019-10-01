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
  Switch
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import RouterScene from '../../Constant/constant';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';

const { PROFILE_SCREEN, HOME_COURSE_AND_SOCETIES,
  CREATE_NEWS_FEED_POST,
  MEMBERS_AREA_NEWS_FEEDS,
  MEMBERS_SECTION_PAGE2,
  MEMBERS_SECTION_PAGE1,
  MEMBERS_AREA_EVENTS,
  MEMBERS_AREA_GAME_OFFERED
  
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
export default class MemberAreaOfferGame extends Component {
  constructor() {
    super();
    this.state = {
      falseSwitchIsOn: true,
     
    };
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
  MEMBERS_AREA_EVENTS = () => {
    //By harshit
    Actions[MEMBERS_AREA_EVENTS]()
  };
  MEMBERS_AREA_GAME_OFFERED = () => {
    //By harshit
    Actions[MEMBERS_AREA_GAME_OFFERED]()
  };
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
          <View>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={this.MEMBERS_AREA_GAME_OFFERED}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>
              <Text style={styles.memberSection}> Offer Game </Text>
            </View>
            <ScrollView style={{ height: window.height + 100 }}>
            <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'DefaultHandicap'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Event date'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Select tee time'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Golf course'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Comment'}
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
                  placeholder={'Mobile'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Spots available'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={{flexDirection:'column',marginTop:5,backgroundColor:'transparent',marginBottom:20}}>
                    <View style={{flexDirection:'row', flex:1,backgroundColor:'transparent'}}>
                        <Text style={styles.detailtext}> Pinned messages</Text>
                        <View style={{flex:1,alignSelf:'flex-end',backgroundColor:'transparent'}}>
                        <Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            style={{ flex:1,alignSelf:'flex-end',marginTop:5,marginRight:20}}
                            value={this.state.falseSwitchIsOn} 
                            onTintColor ='#BBAA64'
                            tintColor='#fffaf0'
                        />
                        </View>    
                    </View>                           
                    <Text style={{marginTop:-20,marginLeft:35,marginRight:80,fontSize:13,color:'white'}}> tap and hold any message to pin it,so you can easily find it later</Text>
                </View> 
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:10,fontWeight:'bold' }}>Create</Text>
                  </View>
                </TouchableOpacity>
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
    marginTop:10,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom:20
  },
  detailtext: {
    fontSize: 15,
    color: 'white',
    margin:10,
    marginLeft:33,
    fontWeight:'bold',
    marginBottom:20
  },
  inputContainer1: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20, marginTop: 10,
    marginBottom: 10
  },
  greyFont1: {
    color: '#7f7f7f',
    height: 40,
    marginLeft: 10,
    marginRight: 10,

  },
  coverImage: {
    width: window.width,
    height: window.height,
    resizeMode: 'contain',
    alignItems: 'flex-start'
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  memberSection: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft:window.width/3.4,
    textAlign:'center',
    marginTop: 20,
    
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
    marginBottom:20,
    marginTop:20
  },
}
