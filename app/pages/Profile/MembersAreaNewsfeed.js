// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image, 
  TouchableOpacity,
  Alert,
  ListView,
  Dimensions
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Profile from "../dashboard/Profile"
import HomeFeed from "../dashboard/HomeFeed.js"
import AddUserPopup from "../dashboard/AddUserPopup.js"
import PostOptionPopup from "../dashboard/PostOptionPopup.js"
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';

const {
  HOME_COURSE_AND_SOCETIES, MEMBERS_AREA, MEMBERS_SECTION_PAGE2,
  CREATE_NEWS_FEED_POST
} = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../Images/DashImages/profile.png');
const backgroundimage = require('../../Images/tut1_bg.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname= "{{Clubname}}";
const Totallmembers = "{{20442 \n Members}}";
const ClubLocation= "{{city, SCountry}}";
//MembersArea newsfeeds1

export default class MembersAreaNewsfeed extends React.Component {
   constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchText: '',
      searchHomeFeedText: '',

      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,

      topToolBarShow: true,

      searchBarShow: false,
      searchHomeFeedBarShow: false,
      dataSource: ds.cloneWithRows([0, 1,2,3,4,5,6,7]),
    };
}

MEMBERS_AREA = () => {
  //By Harshit
  Actions[MEMBERS_AREA]()
};
showTopToolBar = (show) => {
  this.setState({
    topToolBarShow: show
  })
}

//HomeScreenAPI
showSearchBar = (show, index) => {
  if (index == 0) {
    this.setState({
      searchBarShow: show
    })
  } else if (index == 1) {
    this.setState({
      searchHomeFeedBarShow: show
    })
  }
  this.setState({
    stateChanged : true,
  })
}

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
onSwipeUp = () => {
  if (this.state.searchBarShow) {
    this.showSearchBar(false, 0);
  } else if (this.state.searchHomeFeedBarShow) {
    this.showSearchBar(false, 1);
  } else {
    this.showTopToolBar(false);
  }
}

onSwipeDown = () => {
  if (this.state.topToolBarShow) {
    if (this.state.searchHomeFeedBarShow == false) {
      this.showSearchBar(true, 0);
    }
  } else {
    this.showTopToolBar(true);
  }
}

onSwipeDownToolbar = () => {
  if (this.state.searchBarShow == false) {
    this.showSearchBar(true, 1);
  }
}

handleSearchTextChange(text) {
  this.setState({searchText: text});
}

onDeleteItem = (index) => {
  this.homeFeeds.splice(index,1);
  this.setState({homeFeedEdited: true});
};
CREATE_NEWS_FEED_POST = () => {
  //By harshit
  Actions[CREATE_NEWS_FEED_POST]()
};
handlePress(i) {
  alert(i)
}
onShowPostOption = (show) => {
  this.setState({
    showPostOption: show
  })
}
onShowAddUser = (show) => {
  this.setState({
    showAddUser: show
  })
}

render() {
  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
  };

    return (
      <View style={styles.container}>
       <Image style={styles.coverImage} source={dashImage} >
                    <View style={styles.headerView}>
                      <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE2}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                      </TouchableOpacity>
                            <View style={{flexDirection:'column',marginTop:10,flex:.5,alignItems:'center',marginLeft:100,}}>
                              <Text style={styles.fullName}> {Clubname} </Text>
                              <Text style={styles.homeClub}> feed</Text>
                            </View> 
                             <View style={{alignItems:'flex-end',marginTop:30,marginRight:20}}>
                             <TouchableOpacity onPress={this.CREATE_NEWS_FEED_POST}>
                             <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/plus.png")}/>
                              </TouchableOpacity>
                              </View>                           
                    </View>
                </Image>
                  <PostOptionPopup visible={this.state.showPostOption} onCancel={this.onShowPostOption}/>
                  <ListView style={styles.container} showsVerticalScrollIndicator={false} 
                    dataSource={this.state.dataSource} renderRow={(rowData, sectionID, rowID) => (
                    <Profile onShowPostOption={this.onShowPostOption}
                    onLike={this.onShowAddUser}/>) } 
                    />
        </View>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4'
  },
  headerView: {
    flexDirection:'row',
    backgroundColor: 'transparent',
    flex:1
  },
  rightArrow:{
    alignSelf:'center',
    marginLeft:(window.width/6)+20,
    width: 20,
    height: 20,
  },
  profileImage: {
      width: 50,
      height:50,
      marginTop:25,
      marginLeft:20,
      marginBottom:10,
      alignSelf:'flex-start',
      resizeMode:'stretch',
      marginLeft:10,
      borderRadius:2,
      borderColor:'#fff',
    
  },
  coverImage: {
      width:window.width,
      height: 90,
  },
  leftbuttonwhite: {
      width:20,
      height: 20,
      marginTop:30,
      marginLeft:10,
      alignSelf: 'flex-start',
  },
  innerView: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection:'row'
  },
  nameView: {
    flex:1,
      flexDirection:'column'
  },
  fullName: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'white',
      marginTop:20,
      marginBottom:1,
      backgroundColor:'transparent',

      textAlign:'center'
  },
  memberSection: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor:'transparent',
      marginLeft:window.width/3.5,
      marginTop:20,
  },
  homeClub: {
      fontSize: 13,
      color: 'white',
      backgroundColor:'transparent'
  },
  totallmembers: {
    fontSize: 13,
    color: 'white',
    backgroundColor:'transparent',
    textAlign:'right'
  },
  listItem: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: 'transparent',
      paddingRight:10,
      paddingLeft: 10,
      paddingBottom: 7,
      paddingTop: 7,
    },
  lastItemPadding:{
      marginBottom: 10,
    },
  listItemImage: {
      width: 50,
      height: 50,
      resizeMode:'contain',
    },
}
