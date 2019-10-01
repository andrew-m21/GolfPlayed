import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Tab from './Collapsing/Tabs';
import FeedTab from './Collapsing/FeedTab';
import About from './Collapsing/About/About';
import BucketList from './Collapsing/BucketList/BucketList';
import Hightlights from './Collapsing/Hightlights/Hightlights';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js';

const {
  COURSE_REVIEW,
  BUDDIES_SCREEN,
  WALLET,
  FILTER,
  SETTINGS,
} = RouterScene;


const HEADER_MAX_HEIGHT = 370;
const HEADER_MIN_HEIGHT = 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      selectedTab: 'one'
    };

    this.scrollState = 0;
  }

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [this.scrollState, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const opacity = this.state.scrollY.interpolate({
      inputRange: [this.scrollState, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const settingsMenu = this.state.scrollY.interpolate({
      inputRange: [this.scrollState, HEADER_SCROLL_DISTANCE],
      outputRange: [155, 30],
      extrapolate: 'clamp',
    });

    return (
      <Image style={styles.fill} source={require('../../Images/tut1_bg.png')}>
        
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}>

          <FeedTab onTabPress={this.onSelectTab.bind(this)} padding={HEADER_MAX_HEIGHT} id="one" isSelected={this.state.selectedTab == "one"}/>
          <About onTabPress={this.onSelectTab.bind(this)} padding={HEADER_MAX_HEIGHT} id="two" isSelected={this.state.selectedTab == "two"}/>
          <BucketList onTabPress={this.onSelectTab.bind(this)} padding={HEADER_MAX_HEIGHT} id="three" isSelected={this.state.selectedTab == "three"}/>
          <Hightlights onTabPress={this.onSelectTab.bind(this)} padding={HEADER_MAX_HEIGHT} id="four" isSelected={this.state.selectedTab == "four"}/>
        
        </ScrollView>

        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <Image style={styles.cover} source={require('../../Images/DashImages/dashimg.png')}>
            <View style={styles.bar}>
              <TouchableOpacity >
                <Image source={require('../../Images/DashImages/buttons/leftbutton_white.png')} style={styles.backButton}/>
              </TouchableOpacity>
              <View style={styles.info}>
                  <Text style={styles.name}>Andrew Gorgiou</Text>
                <Text style={styles.course}>Course name</Text>
              </View>
            </View>
          </Image>
          
          <Animated.View style={{position: 'absolute', right: 10, top: settingsMenu, zIndex: 100}}>
            <TouchableOpacity onPress={() => Actions[SETTINGS]()}>
              <Image source={require('../../Images/Profile/settings1.png')} style={styles.more}/>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image style={[styles.profile, {opacity: opacity}]} source={require("../../Images/DashImages/profile.png")}/>
            <Animated.View style={[styles.details, {opacity: opacity}]}>
              <View style={styles.connectionsView}>
                <TouchableOpacity onPress={() => Actions[WALLET]()}><Text style={styles.connectionText}>Wallet</Text></TouchableOpacity> 
              </View>

              <Text style={styles.description}>profileDescription Maximum 2 lines in SF Pro Display Light 50pt. with 20pt spacing and 60pt line 
              <Text style={{color:'#bbaa64',fontSize: 15}} > ...more</Text></Text>

              <View style={styles.badges}>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
                <Image source={require("../../Images/DashImages/profile.png")} style={styles.badge}></Image>
              </View>

              <View style={styles.numDetails}>
                <TouchableOpacity style={styles.numDetail} onPress={() => Actions[FILTER]()}>
                  <Text style={styles.count}>20</Text>
                  <Text style={styles.det}>Courses</Text>
                </TouchableOpacity>

                <View style={styles.numDetail}>
                  <Text style={styles.count}>20</Text>
                  <Text style={styles.det}>Rounds</Text>
                </View>

                <TouchableOpacity style={styles.numDetail} onPress={() => Actions[BUDDIES_SCREEN]()}>
                  <Text style={styles.count}>20</Text>
                  <Text style={styles.det}>Buddies</Text>
                </TouchableOpacity>

                <View style={styles.numDetail}>
                  <Text style={styles.count}>20</Text>
                  <Text style={styles.det}>Followers</Text>
                </View>
              </View>

            </Animated.View>
          <View style={styles.tabs}>
            <ScrollView  horizontal={true}>
              <Tab style={{width: 60,}} onTabPress={this.onSelectTab.bind(this)} title="Feed" id="one" isSelected={this.state.selectedTab == "one"}/>
              <Tab style={{width: 60,}} onTabPress={this.onSelectTab.bind(this)} title="About" id="two" isSelected={this.state.selectedTab == "two"}/>
              <Tab style={{width: 100,}} onTabPress={this.onSelectTab.bind(this)} title="BucketList" id="three" isSelected={this.state.selectedTab == "three"}/>
              <Tab style={{width: 100,}} onTabPress={this.onSelectTab.bind(this)} title="Hightlights" id="four" isSelected={this.state.selectedTab == "four"}/>
              <Tab style={{width: 60,}} onTabPress={this.onSelectTab.bind(this)} title="Stats" id="five" isSelected={this.state.selectedTab == "five"}/>
              <Tab style={{width: 60,}} onTabPress={this.onSelectTab.bind(this)} title="Media" id="six" isSelected={this.state.selectedTab == "six"}/>
              <Tab style={{width: 80,}} onTabPress={this.onSelectTab.bind(this)} title="Reviews" id="seven" isSelected={this.state.selectedTab == "seven"}/>
            </ScrollView>
          </View>
        </Animated.View>

      </Image>
    );
  }

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }

}

const styles = StyleSheet.create({
  fill: {
    width: '100%',
    height: '100%',
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  bar: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 26,
    width: '100%',
    flexDirection :'row',
    alignItems:'center'
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  tabs:{
    backgroundColor: "#000",
    position: 'absolute',
    bottom: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  line:{
    color: "#bbaa64",
    backgroundColor: "#bbaa64"
  },
  cover:{
    height: 150,
    width: '100%',
    backgroundColor: "#999"
  },
    backButton:{
      width: 15,
      height: 15,
      resizeMode: 'contain',
  },
  more:
  {
    width: 35,
    height: 35,
  },
  info:
  {
      flex:1,
      marginLeft: 10,
      alignItems:'center'
  },
  name:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  course:
  {
      color: '#eee',
      fontSize: 14,
      backgroundColor: 'transparent',
  },
  profile:{
    position: 'absolute',
    width: 100,
    height: 100,
    top: 90,
    left: 10,
  },
  details:{
    flex: 1,
  },
  connectionsView:{
    marginLeft: 120,
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center'
  },
  connectionsLogo:{
    width: 15,
    height: 15,
    marginTop: 5,
  },
  connectionText:{
    fontSize: 12,
    backgroundColor: 'transparent',
    marginLeft: 3,
    marginTop: 5,
    color: '#bbaa64',
  },
  buddies:{
    alignSelf: 'flex-end',
    backgroundColor: '#bbaa64',
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    top: 0,
  },
  buddiesText: {
    color: "#fff"
  },
  description:{
    padding: 10,
    marginTop: 5,
    fontSize: 14.5,
    backgroundColor: 'transparent',
  },
  badges:{
    flexDirection: 'row',
    padding: 10,
    paddingTop: 5,
    justifyContent: 'space-between'
  },
  badge:{
    width: 35, 
    height: 35,
    resizeMode: 'contain'
  },
  numDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  numDetail:{
    alignItems: 'center',
  },
  count:{
    color: "#bbaa64",
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  det:{
    color: 'black',
    fontSize: 15,
    marginTop: -5,
    backgroundColor: 'transparent',
  }
});
