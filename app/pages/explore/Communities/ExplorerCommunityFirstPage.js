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
import RouterScene from '../../../Constant/constant';

const { 
  PROFILE_SCREEN,
  HOME_COURSE_AND_SOCETIES,
  MEMBERS_AREA,
  EXPLORER_COMMUNITY_NEWS_FEEDS,
  MEMBERS_SECTION_PAGE1,
  CREATE_NEWS_FEED_POST,
  MEMBERS_AREA_EVENTS,
  MEMBERS_AREA_CREATE_EVENTS,
  MEMBERS_AREA_GAME_REQUESTED,
  MEMBERS_AREA_GAME_OFFERED,
  MEMBERS_AREA_OFFER_GAME,
  MEMBERS_AREA_MARKET_PLACE,
  MEMBERS_AREA_INBOX
  
} = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../../Images/DashImages/profile.png');
const backgroundimage = require('../../../Images/tut1_bg.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname = "{{Clubname}}";
const Totallmembers = "{{20442 \n Members}}";
const ClubLocation = "{{city, SCountry}}";
const image =require("../../../Images/DashImages/profile.png");
const rightArrowpic =require("../../../Images/DashImages/buttons/rightbutton.png")
//MembersArea2


export default class ExplorerCommunityFirstPage extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

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

  MEMBERS_AREA_EVENTS = () => {
    //By harshit
    Actions[MEMBERS_AREA_EVENTS]()
  };
  MEMBERS_SECTION_PAGE1 = () => {
    //By harshit
    Actions[MEMBERS_SECTION_PAGE1]()
  };
  EXPLORER_COMMUNITY_NEWS_FEEDS = () => {
    //By harshit
    Actions[EXPLORER_COMMUNITY_NEWS_FEEDS]()
  };
  MEMBERS_AREA_GAME_REQUESTED = () => {
    //By harshit
    Actions[MEMBERS_AREA_GAME_REQUESTED]()
  }; 
  MEMBERS_AREA_GAME_OFFERED = () => {
    //By harshit
    Actions[MEMBERS_AREA_GAME_OFFERED]()
  };
  MEMBERS_AREA_MARKET_PLACE = () => {
    //By harshit
    Actions[MEMBERS_AREA_MARKET_PLACE]()
  };
  MEMBERS_AREA_INBOX = () => {
    //By harshit
    Actions[ MEMBERS_AREA_INBOX]()
  };
 
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={dashImage} >
          <View style={styles.headerView}>
            <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE1}>
              <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
            </TouchableOpacity>
            <Image style={styles.profileImage} source={profileImage} />
            <View style={{ flexDirection: 'column', marginTop: 10 }}>
              <Text style={styles.fullName}> {Clubname} </Text>
              <Text style={styles.homeClub}> {ClubLocation} </Text>

            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 30, marginRight: 20 }}>
              <Text style={styles.totallmembers} > {Totallmembers} </Text>
            </View>
          </View>
        </Image>
        <View style={{ height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
        <Image style={{ resizeMode: 'contain', height: window.height, width: window.width }} source={backgroundimage} >
          <View>
            <TouchableOpacity style={styles.listItem} onPress={this.EXPLORER_COMMUNITY_NEWS_FEEDS} >
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Newsfeed</Text>
              </View>
              <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
          </View>
          <View>
          <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_AREA_EVENTS} >
            <Image style={styles.listItemImage} source={image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}>Events </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
        </View>
        <View>
            <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_AREA_GAME_REQUESTED} >
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Golf games requested </Text>
              </View>
              <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_AREA_GAME_OFFERED} >
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Golf games offered </Text>
              </View>
              <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_AREA_MARKET_PLACE} >
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Marketplace </Text>
              </View>
              <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.listItem}  onPress={this.MEMBERS_AREA_INBOX}>
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Inbox </Text>
              </View>
              <View style={styles.badgeContainer}><Text style={styles.badge}>{1}</Text></View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_AREA_NEWS_FEEDS} >
              <Image style={styles.listItemImage} source={image} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle}>Leave community </Text>
              </View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={rightArrowpic} /></View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10 }}></View>
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
    flex: 1
  },
  profileImage: {
    width: 50,
    height: 50,
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    resizeMode: 'stretch',
    marginLeft: 10,
    borderRadius: 2,
    borderColor: '#fff',

  },
  coverImage: {
    width: window.width,
    height: 90,
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  innerView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  nameView: {
    flex: 1,
    flexDirection: 'column'
  },
  fullName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 1,
    backgroundColor: 'transparent',
    marginLeft: 5
  },
  homeClub: {
    fontSize: 13,
    color: 'white',
    backgroundColor: 'transparent'
  },
  totallmembers: {
    fontSize: 13,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'right'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 7,
    paddingTop: 7,
  },
  listItemImage: {
    width: 50,
    height: 50,
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
    borderRadius: 50,
    padding: 5,
    fontSize: 12,
  },
  rightArrow: {
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  listItemTitle: {
    fontSize: 16,
    color: '#fff',
    marginLeft:10
  },
}
