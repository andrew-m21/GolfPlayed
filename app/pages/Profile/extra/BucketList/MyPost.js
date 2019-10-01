
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
    ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ExperienceToDo from './ExperienceToDo';
import ExperienceCompleted from './ExperienceCompleted';
import { Dialog } from 'react-native-simple-dialogs';
import TabPage1 from '../TabPage1.js';
import MapView from 'react-native-maps';
import PostOptionPopup from "../PostOptionPopup.js";
import Profile from "../Profile";

import HomeFeed from "../HomeFeed.js";
import SearchBar from "../SearchBar.js";
import TopToolbar from "../TopToolbar.js";
import Tab from './Tabs';

const backgroundimage = require('../../../Images/tut1_bg.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const Marketplace = "{{Marketplace}}";
const Drivers = "{{Drivers}}";
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
        isSelected:'two',
        selectedTab: null,
        searchText: '',
        searchHomeFeedText: '',
  
        homeFeedEdited: false,
        showPostOption: false,
        showAddUser: false,
  
        topToolBarShow: true,
    
        searchBarShow: false,
        searchHomeFeedBarShow: false,
        dataSource: ds.cloneWithRows([0, 1,2,3,4,5,6,7]),
    }
    this.openDialog(true);
this.homeFeeds = [
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed1.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed2.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed3.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed4.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed1.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed2.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed3.png')
  },
  {
    image: require('../../../Images/DashImages/HomeFeeds/HomeFeed4.png')
  },
]
}
handlePress(i) {
    alert(i)
  }
  onShowPostOption = (show) => {
    this.setState({
      showPostOption: show
    })
  }
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
  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }

  handleSearchTextChange(text) {
    this.setState({searchText: text});
  }

  onSwipeDownToolbar = () => {
    if (this.state.searchBarShow == false) {
      this.showSearchBar(true, 1);
    }
  }
MEMBERS_AREA_MARKET_PLACE = () => {
    //By Harshit
    Actions[MEMBERS_AREA_MARKET_PLACE]()
};
MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL = () => {
    //By Harshit
    Actions[MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL]()
};

openDialog(show) {
    this.setState({ showDialog: show })
}
onDeleteItem = (index) => {
    this.homeFeeds.splice(index,1);
    this.setState({homeFeedEdited: true});
  }
onShowAddUser = (show) => {
    this.setState({
      showAddUser: show
    })
  }
  render(){
    
    return (
      <View >
        {this.props.isSelected && <View style={styles.container}>
        <View>
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
                            <ListView style={styles.container} showsVerticalScrollIndicator={false} 
                                dataSource={this.state.dataSource} renderRow={(rowData, sectionID, rowID) => (
                                <Profile onShowPostOption={this.onShowPostOption}
                                onLike={this.onShowAddUser}/>) } 
                            />
                            <HomeFeed style={{paddingTop: 50}}
                                objects={this.homeFeeds}
                                //   onDeleteItem={this.onDeleteItem}
                                show={this.state.searchHomeFeedBarShow} 
                                onSwipeUp={this.onSwipeUp.bind(this)}
                                onSwipeDown={this.onSwipeDown.bind(this)}
                                style={{top: this.state.topToolBarShow? 1 : 0}} />
                            <SearchBar show={this.state.searchBarShow}
                                onChangeText={this.handleSearchTextChange.bind(this)}
                                placeholder="Search"
                                hasButton={true}
                                onClickHandler={this.onSwipeUp.bind(this)} 
                                style={{top: this.state.topToolBarShow? 1 : 0, position: 'absolute'}}/>
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
      width: "100%",
      height: "100%",
  },

});