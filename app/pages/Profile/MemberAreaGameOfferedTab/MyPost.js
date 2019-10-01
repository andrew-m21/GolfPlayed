
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
    Dimensions, 
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const window = Dimensions.get('window');

import { Dialog } from 'react-native-simple-dialogs';
import TabPage1 from '../TabPage1.js';
import MapView from 'react-native-maps';
import PostOptionPopup from "../PostOptionPopup.js";
import Profile from "../Profile";

import HomeFeed from "../HomeFeed.js";
import SearchBar from "../SearchBar.js";
import TopToolbar from "../TopToolbar.js";
import Tab from '../MemberAreaGameOfferedTab/Tabs';

const backgroundimage = require('../../../Images/tut1_bg.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const clubname = "{{ClubName}}";
const gameoffered = "{{Game offered}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../../Images/DashImages/profile.png');

export default class MyPost extends Component{
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            showPostOption: false,
            animation: new Animated.Value(120),
        }
        this.openDialog(true);
        console.log('sdffsd'+this.state.expanded)
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

    onDeleteItem = (index) => {
        this.homeFeeds.splice(index,1);
        this.setState({homeFeedEdited: true});
    };

    onShowAddUser = (show) => {
        this.setState({
        showAddUser: show
        })
    };

  toggle() {
    console.log('sdffsd'+this.state.expanded)
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded: !this.state.expanded
    });

    this.state.animation.setValue(finalValue);
}

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: 120
        });
    }
  
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
                  <PostOptionPopup visible={this.state.showPostOption} onCancel={this.onShowPostOption}/>
                  <Animated.View
                    style={[styles.Ani_container, { height: this.state.animation }]}>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                    <View style={styles.card} onLayout={this._setMinHeight.bind(this)}>
                      <View style={styles.card}>
                          <View style={{ width: '30%', marginLeft: 10 }}>
                          
                              <Image
                                  source={profileImage}
                                  resizeMode="contain"
                                  resizeMethod="scale"
                                  style={{ height: 80, width: 80 }} />
                                 
                          </View>
                          <View style={{ width: '70%', marginLeft: -25, margin: 10 }}>
                              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                  <Text style={{ fontSize: 19, fontWeight: 'bold' }}>october 14, 2017</Text>
                                  {/* <TouchableOpacity onPress={() => this.onShowPostOption(true)} >
                                      <Image style={styles.icon} source={require('../../Images/DashImages/arrowDownButton.png')} />
                                  </TouchableOpacity> */}
                              </View>
                              <Text style={{ fontSize: 15, }}>Erinvale Golf Club</Text>
                              <Text style={{ fontSize: 14, }}>andrew Georgiou</Text>
                              <View style={{ flexDirection: 'row', }}>
                                  <Image
                                      source={require("../../../Images/clock.png")}
                                      resizeMode="contain"
                                      resizeMethod="scale"
                                      style={{ height: 24, width: 24 }} />
                                  <Image
                                      source={require("../../../Images/clock.png")}
                                      resizeMode="contain"
                                      resizeMethod="scale"
                                      style={{ height: 24, width: 24 }} />
                                  <Image
                                      source={require("../../../Images/clock.png")}
                                      resizeMode="contain"
                                      resizeMethod="scale"
                                      style={{ height: 24, width: 24 }} />
                                  <Image
                                      source={require("../../../Images/clock.png")}
                                      resizeMode="contain"
                                      resizeMethod="scale"
                                      style={{ height: 24, width: 24 }} />
                                  <View style={{ position: 'absolute', right: 0, }}>
                                      <TouchableOpacity style={{ flexDirection: "row" }}>
                                          <Text style={{ fontSize: 13, marginTop: 5 }}>4 comments . 2 shares</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                          </View>
                      </View>
                  </View>
                  </TouchableOpacity>

                  <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                      {this.props.children}
                     
                          <Text style={styles.childText}>Handicap: 18</Text>
                          <Text style={styles.childText}>Date: October14,2017</Text>
                          <Text style={styles.childText}>Time of day: AM</Text>
                          <Text style={styles.childText}>Golf course: Erinvale Golf Club</Text>
                          <Text style={styles.childText}>Comments: Test Comment</Text>
                          <View style={{ flexDirection: 'row', }}>
                          <Text style={styles.childText}>RSVP mail:</Text>
                          <Text style={{ marginLeft:5,marginTop: 10,color: '#BBAA64', fontSize: 16}}>
                          tyler@golfplayed.com</Text>
                          </View>
                          <View style={{ flexDirection: 'row', }}>
                          <Text style={styles.childText}>RSVP phone:</Text>
                          <Text style={{ marginLeft:5,marginTop: 10,color: '#BBAA64', fontSize: 16}}>
                          1234567890</Text>
                          </View>
                  </View>

              </Animated.View>
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
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        
    },
    coverImage: {
        width: window.width,
        height: 90,
    },
    mapView: {
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        flex: 1
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
    rightArrow: {
        alignSelf: 'center',
        marginLeft: (window.width / 6) + 20,
        width: 20,
        height: 20,
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 30,
        marginLeft: 10,
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 80
    },
    fullName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    homeClub: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },




    Ani_container: {
        marginLeft:10,marginRight:10,
        borderRadius:10,
        backgroundColor: '#fff',
        margin: 2,
        overflow: 'hidden',
        marginBottom:20,
        marginTop:5
    },
    button_img: {
        padding: 5,
        height: 150,
        width: window.width,
        resizeMode: 'cover',

    },
    titleContainer: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        color: '#2a2f43',
        fontWeight: 'bold',
        fontSize: 16
    },
    childText: {
        marginTop: 10,
        color: '#2a2f43',
        fontSize: 16
    },

    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        backgroundColor: 'transparent',
        padding: 10,
        paddingTop: 0,
        marginTop:5
    }
}) 