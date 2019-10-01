
import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ListView,
    Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const window = Dimensions.get('window');
//import ExperienceToDo from './ExperienceToDo';
//import ExperienceCompleted from './ExperienceCompleted';
import { Dialog } from 'react-native-simple-dialogs';

import MapView from 'react-native-maps';
import PostOptionPopup from "../PostOptionPopup.js";

import HomeFeed from "../HomeFeed.js";
import SearchBar from "../SearchBar.js";
import TopToolbar from "../TopToolbar.js";
import Tab from '../MemberAreaGameRequestedTab/Tabs';

const profileImage = require('../../../Images/DashImages/profile.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');

export default class MyPost extends Component{
  constructor(props) {
    super(props)
        this.state = {
            showPostOption: false,
        }
    this.openDialog(true);
  };

  handlePress(i) {
    alert(i)
  };

  onShowPostOption = (show) => {
    this.setState({
      showPostOption: show
    })
  };

  openDialog(show) {
    this.setState({ showDialog: show })
  };

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  };
  
  render(){
    return (
      <View>
      <View style={styles.line}></View>
          {this.props.isSelected && <View >
        <View style={{backgroundColor:'transparent',height:window.height}}>
            <ScrollView style={{backgroundColor:'transparent',height:window.height}}>
              <View style={{backgroundColor:'transparent',height:window.height}}> 
              <Dialog
              visible={this.state.showDialog}
              title=""
              onTouchOutside={() => this.openDialog(false)}
              contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
              animationType="fade"
              onTouchOutside={() => this.setState({ dialogVisible: false })}>
              <Image
                  source={require("../../../Images/tut1_logo.png")}
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
          <View style={styles.mapView}>
              <MapView
                  style={styles.map}
                  region={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}
              >
              </MapView>
          </View>
          <View style={styles.card}>
              <View style={{ width: '30%', }}>
                  <Image
                      source={require("../../../Images/tut1_logo.png")}
                      resizeMode="contain"
                      resizeMethod="scale"
                      style={{ height: 100, width: 100 }} />
              </View>
              <View style={{ width: '70%', }}>
                  <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 19, fontWeight: 'bold' }}>CPT golf day</Text><Text style={{ fontSize: 14, marginRight: 10 }}>3.2miles</Text>
                  </View>
                  <Text style={{ fontSize: 17, }}>Erinvale Golf Club</Text>
                  <Text style={{ fontSize: 17, }}>Cape Town, South Africa</Text>
                  <View style={{ flexDirection: 'row',  }}>
                  <Image
                      source={require("../../../Images/clock.png")}
                      resizeMode="contain"
                      resizeMethod="scale"
                      style={{ height: 24, width: 24 }} />
                      <Text style={{ fontSize: 17, }}>9AM - 5PM</Text>
                      <View style={{position: 'absolute', right: 0,}}>
                      <TouchableOpacity style={{flexDirection:"row"}}>
                          <Text style={{ fontSize: 17, }}>Details</Text>
                          <Image
                      source={require("../../../Images/chevron_right.png")}
                      resizeMode="contain"
                      resizeMethod="scale"
                      style={{ height: 24, width: 24 }} />
                      </TouchableOpacity>
                  </View>
                      </View>
              </View>
          </View>
              </View>
          </ScrollView>
         </View> 
        </View>}
      </View>
    )
  }

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    backgroundColor: 'white',
    borderRadius: 8,
    height:window.height
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
  card: {
      marginTop: 15,
      borderRadius: 10,
      backgroundColor: "#fff",
      marginLeft: 15, marginRight: 15,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center"
  },
  coverImage: {
      width:window.width,
      height: 90,
  },
  mapView: {
      marginTop:10,
      borderRadius: 10,
      marginLeft: 15,
      marginRight: 15,
      alignItems: "center",
      justifyContent: "center",
  },
  headerView: {
      flexDirection:'row',
      backgroundColor: 'transparent',
      flex:1
    },
  icon: {
      width: 20,
      height: 20,
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
      backgroundColor: '#CCCCCC'
  },
  rightArrow:{
      alignSelf:'center',
      marginLeft:(window.width/6)+20,
      width: 20,
      height: 20,
    },
  leftbuttonwhite: {
      width:20,
      height: 20,
      marginTop:30,
      marginLeft:10,
      alignSelf: 'flex-start',
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
      flex:1,
      alignItems:'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 15,
      marginLeft:80
  },
  fullName: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'transparent',
      textAlign:'center'
  },
  homeClub: {
      marginLeft: 10,
      fontSize: 15,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign:'center'
    },
})