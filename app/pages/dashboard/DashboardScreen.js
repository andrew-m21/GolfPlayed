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
  ListView
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Profile from "./Profile.js"
import SearchBar from "./SearchBar.js"
import HomeFeed from "./HomeFeed.js"
import AddUserPopup from "./AddUserPopup.js"
import PostOptionPopup from "./PostOptionPopup.js"
import TopToolbar from "../Component/Toolbars/TopToolbar.js"

export default class DashboardScreen extends React.Component {
  
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
    this.homeFeeds = [
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed1.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed2.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed3.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed4.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed1.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed2.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed3.png')
      },
      {
        image: require('../../Images/DashImages/HomeFeeds/HomeFeed4.png')
      },
    ]
  }

  componentDidMount (){
    alert("Remaining work is in progress , thanks for your patience.")
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
  }

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
        <TopToolbar show={this.state.topToolBarShow} onSwipeDown={this.onSwipeDownToolbar} onSearch={this.onSwipeDown.bind(this)}/>
        <AddUserPopup visible={this.state.showAddUser} onCancel={this.onShowAddUser}/>
        <PostOptionPopup visible={this.state.showPostOption} onCancel={this.onShowPostOption}/>

        <ListView style={styles.container} showsVerticalScrollIndicator={false} 
        dataSource={this.state.dataSource} renderRow={(rowData, sectionID, rowID) => (<Profile onShowPostOption={this.onShowPostOption}
          onLike={this.onShowAddUser}/>) } />

        <HomeFeed style={{paddingTop: 50}}
          objects={this.homeFeeds}
          show={this.state.searchHomeFeedBarShow} 
          onDeleteItem={this.onDeleteItem}
          onSwipeUp={this.onSwipeUp.bind(this)}
          onSwipeDown={this.onSwipeDown.bind(this)}
          style={{top: this.state.topToolBarShow? 60 : 0}} />
        <SearchBar show={this.state.searchBarShow}
          onChangeText={this.handleSearchTextChange.bind(this)}
          placeholder="Search"
          hasButton={true}
          onClickHandler={this.onSwipeUp.bind(this)} 
          style={{top: this.state.topToolBarShow? 60 : 0, position: 'absolute'}}/>
      </View>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4'
  }
}
