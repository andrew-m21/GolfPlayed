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
    Switch, Button,
    Picker
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
//import Accordion from 'react-native-collapsible/Accordion';
const {
  MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL,
    CALCULATOR,
    MEMBERS_AREA_MARKET_PLACE_DRIVER

} = RouterScene;
const backgroundimage = require('../../Images/tut1_bg.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const Marketplace = "{{Marketplace}}";
const Drivers = "{{Drivers}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');

const listData = [
    {
        title: "Eeinvale GC",
        image: require("../../Images/DashImages/profile.png"),
        unread: 1,
    },
    {
        title: "SW Burners",
        image: require("../../Images/DashImages/profile.png"),
        unread: 3,
    },
    {
        title: "Erivale kings",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    }
  ];
export default class MembersAreaMarketPlaceDriver extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
            showPostOption: false,
            user: '',
            show:false
        }
        this.openDialog(true);
    }
    
    updateUser=(user)=> {
      this.setState({ user:user})
   }
    
    handlePress(i) {
        alert(i)
      }
      onShowPostOption = (show) => {
        this.setState({
          showPostOption: show
        })
      }
      onShow = () => {
        if(this.state.show==false){
          this.setState({
            show:true
          })
        }else{
          this.setState({
            show:false
          })
        }
        
      }

    MEMBERS_AREA_MARKET_PLACE_DRIVER = () => {
        //By Harshit
        Actions[MEMBERS_AREA_MARKET_PLACE_DRIVER]()
    };
    CALCULATOR = () => {
      //By Harshit
      Actions[CALCULATOR]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    render() {
        return (
            <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
          <View>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={this.MEMBERS_AREA_MARKET_PLACE_DRIVER}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>
              <Text style={styles.memberSection}> Sell </Text>
            </View>
            <ScrollView style={{ height: window.height + 100 }}>
              <View style={styles.innerView}>
                <Image style={styles.coverImage1} source={dashImage} >
                  <View style={styles.nameView}>
                    <Text style={styles.fullName}> Upload an image of your event </Text>
                  </View>
                </Image>
              </View>

              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Select category'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer2}>
                <TextInput
                  multiline={true}
                  style={styles.greyFont2}
                  placeholder={'Product description'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'brand (Optional)'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
              <View style={{ flexDirection:'row',marginLeft:20}}>
              <TouchableOpacity onPress={this.onShow}>
                  <View style={styles.button1}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:10 }}>Currency</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.CALCULATOR}>
                  <View style={styles.button1}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:10 }}>Price</Text>
                  </View>
                </TouchableOpacity>
                </View>
              {this.state.show && <View  style={{}}>
              <Picker selectedValue = {this.state.user} 
                      onValueChange = {this.updateUser}
                >
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "india" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "india" value = "India" />
                
              </Picker>
              </View>}
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:10 }}>Post</Text>
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
    flexDirection: 'row',
    backgroundColor: 'transparent',
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
    height: 160,
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
    marginTop:20
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
    marginLeft: window.width / 2.5,
    marginTop: 20,
    textAlign:'center'
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
    marginBottom:70,
    marginTop:30
  },
  button1:{
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: 'lightgrey',
    borderWidth:1,
    borderColor:'black',
    width:180,
    height:40,
    borderRadius:50,
    margin:5
  },
}
