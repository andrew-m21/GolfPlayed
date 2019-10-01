
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

import { Actions } from 'react-native-router-flux'
import RouterScene from '../../../Constant/constant';
import { Dialog } from 'react-native-simple-dialogs';

// import PostOptionPopup from "../PostOptionPopup.js";
import Profile from "../Profile";
const { 
  EXPLORER_COMMUNITY_FIRST_PAGE
} = RouterScene;
import Tab from '../MarketPlaceTab/Tabs';
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

export default class Created extends Component{
  constructor(props) {
    super(props)
    const ds1= new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
   
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
        listDataSource: ds1.cloneWithRows(this.listData),
        
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
  EXPLORER_COMMUNITY_FIRST_PAGE = () => {
    //By Harshit
    Actions[EXPLORER_COMMUNITY_FIRST_PAGE]()
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
  listData = [
    {
      title: "Michale",
      subtitle: "HomeClub",
      image: require("../../../Images/DashImages/profile.png"),
    },
    {
      title: "Michale",
      subtitle: "HomeClub",
      image: require("../../../Images/DashImages/profile.png"),
    },
    {
      title: "Michale",
      subtitle: "HomeClub",
      image: require("../../../Images/DashImages/profile.png"),
    }
  ];

  renderListItem(rowData, rowId) {
    if(rowId == this.listData.length - 1)
    {
      return(
        <View>
          <TouchableOpacity onPress={this.EXPLORER_COMMUNITY_FIRST_PAGE} style={[styles.listItem, styles.lastItemPadding]}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listsubTitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else if(rowId == 0)
    {
      return(
        <View>
          <TouchableOpacity onPress={this.EXPLORER_COMMUNITY_FIRST_PAGE} style={styles.listItem} >
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}> {rowData.title} </Text>
            <Text style={styles.listsubTitle}> {rowData.subtitle} </Text>
          </View>
          <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/buttons/rightbutton.png")}/></View>
        </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else
    {
      return(
        <View>
          <TouchableOpacity style={styles.listItem} onPress={this.EXPLORER_COMMUNITY_FIRST_PAGE}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}> {rowData.title} </Text>
            <Text style={styles.listsubTitle}> {rowData.subtitle} </Text>
          </View>
          <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/buttons/rightbutton.png")}/></View>
        </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );
    }
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
                            {/* <PostOptionPopup visible={this.state.showPostOption} onCancel={this.onShowPostOption}/> */}
                          
                          <View>
                             <ListView 
                                  showsVerticalScrollIndicator={false} 
                                  removeClippedSubviews={false}
                                  dataSource={this.state.listDataSource} 
                                  renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))}  
                              />
                        </View> 
                              
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
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingRight:10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
lastItemPadding:{
    marginBottom: 10,
  },
listItemImage: {
    width: 70,
    height: 70,
    resizeMode:'contain',
  },
listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5
  },
badgeContainer:{
    justifyContent:'center',

  },
badge:{
    color: 'black',
    backgroundColor: '#bbaa64',
    borderRadius: 10,
    padding: 5,
    fontSize: 12,
  },
rightArrow:{
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  listItemTitle:{
  color:'white'
  },
  listsubTitle:{
    color:"rgba(187, 170, 100, 0.5)"
    },
});