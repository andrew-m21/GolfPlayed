// By Dmitry
import React from 'react';
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
  ToastAndroid,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js';
const {
  CREATE_A_COMMUNITIES
} = RouterScene;
import Swipeout from 'react-native-swipeout';
import Tab from "./MarketPlaceTab/Tabs"
import Created from './MarketPlaceTab/Created';
import Filter from './MarketPlaceTab/Filter';
import Saved from './MarketPlaceTab/Saved';
const leftbutton_white = require('../../Images/DashImages/buttons/plus.png');

const {
  CHAT
} = RouterScene;

export default class Explorer extends React.Component {

  constructor(props) {
    super(props)


    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      searchText: '',
      searchHomeFeedText: '',
      data1: 0,
      isSelected: 'two',
      selectedTab: "",
      show: false,
      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
      listDataSource: ds.cloneWithRows(this.listData),
    };
  }
  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }
  CREATE_A_COMMUNITIES = () => {
    //By harshit
    Actions[CREATE_A_COMMUNITIES]()
  };
  onShow = () => {
    if (this.state.show == false) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }
  render() {


    var image1;


    let handleToUpdate = this.props.handleToUpdate;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignContent: 'center', marginTop: 25, flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity style={{ position: 'absolute', right: 10, marginBottom: 15 ,marginTop:-5}}
            onPress={this.CREATE_A_COMMUNITIES} >
            <Image style={{ height: 30, width: 30, }} source={leftbutton_white} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <TextInput secureTextEntry={this.props.secureTextEntry} placeholder={"Search"}
            placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid={'#bbaa64'} style={{ color: "#fff" }} />
        </View>

        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/numberOfCourse.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/explore.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/connect.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/notification.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onShow}>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/me.png')} />
          </TouchableOpacity>
        </View>
        {this.state.show && <View style={{}}>
          {this.state.isSelected && <View style={[styles.container1, { paddingTop: this.props.padding }]}>
            <View style={[styles.tabs, { paddingRight: 10, paddingLeft: 10, }]} >
              <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Filter" id="one" isSelected={this.state.selectedTab == "one"} />
              <Tab style={[styles.tab, styles.middleTab]} onTabPress={this.onSelectTab.bind(this)} title="Created" id="two" isSelected={this.state.selectedTab == "two"} />
              <Tab style={[styles.tab, styles.endTab]} onTabPress={this.onSelectTab.bind(this)} title="Saved" id="three" isSelected={this.state.selectedTab == "three"} />
            </View>
            <Filter onTabPress={this.onSelectTab.bind(this)} title="Filter" id="one" isSelected={this.state.selectedTab == "one"} />
            <Created onTabPress={this.onSelectTab.bind(this)} title="Created" id="three" isSelected={this.state.selectedTab == "two"} />
            <Saved onTabPress={this.onSelectTab.bind(this)} title="Saved" id="three" isSelected={this.state.selectedTab == "three"} />
          </View>}
        </View>}
        <View style={{
          height: 10, backgroundColor: "rgba(187, 170, 100, 1)", height: 30,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}>

          <TouchableOpacity style={{
            fontSize: 18, flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }} onPress={this.OnBUttonPress}>
            <Text onPress={this.OnBUttonPress}>From</Text>
            <Image style={styles.item1} source={require('../../Images/DashImages/down.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            fontSize: 18, flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}>
            <Text>Received</Text>
            <Image style={styles.item1} source={require('../../Images/DashImages/down.png')} />

          </TouchableOpacity>
        </View>



        <ListView showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
          dataSource={this.state.listDataSource}
          renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />

      </View>
    );
    OnBUttonPress = () => {
      ToastAndroid.show(this.state.data1 + "nn", 1)
    }
  }

  renderListItem(rowData, rowId) {

    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'rgba(255, 255, 255,1)',
      color: 'black',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      fontSize: 16,


    }];



    return (
      <View>
        <Swipeout right={swipeBtns} type={"primary"}

          backgroundColor='transparent'>
          <View style={styles.listItem}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}>
                <Text style={styles.listItemTitle}> {rowData.date} </Text>
                <Text style={styles.showDate}> {rowData.date1} </Text>

              </View>
              <Text style={styles.listItemTitle1}> {rowData.title} </Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}>
                <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
                <Image style={styles.arrow} source={rowData.unread} />
              </View>
            </View></View>
        </Swipeout>
        <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 10, marginRight: 10 }}></View>

      </View>
    );
  }


  listData = [
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/HomeFeeds/HomeFeed1.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/HomeFeeds/HomeFeed2.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/HomeFeeds/HomeFeed3.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/profile.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/profile.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/profile.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    },
    {
      date: "Andrew Dunn ",
      date1: "oct 17,2017",
      title: "Events gane requested Dec 5,2017",
      subtitle: "Hey dude just checking if we still on for the events coming in the week time.I'll pick you up from yoe place 6 am",
      image: require("../../Images/DashImages/profile.png"),
      unread: require("../../Images/DashImages/buttons/rightbutton.png"),
    }
  ];

}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  container1: {
    width: "100%",

  },
  tabs: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  closeButton: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 25,
    top: 10,
  },
  newPopup: {
    width: 30,
    height: 30
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 20,
    color: 'white',
    height: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparent'
  },
  buttonGroup: {
    marginTop: 20,
  },
  active: {
    backgroundColor: '#bbaa64',
  },
  normal: {
    backgroundColor: 'white'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding: {
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 13,
    color: '#fff',
  },

  listItemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10
  },
  badgeContainer: {
    justifyContent: 'center',
  },
  badge: {
    color: 'black',
    backgroundColor: '#bbaa64',
    borderRadius: 100,
    padding: 5,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
  },
  status: {
    color: '#aaa',
    fontSize: 10,
    marginRight: 5,
  },
  rightArrow: {
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  },

  toolbar: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  item: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  item1: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  listItemTitle1: {
    fontSize: 13,
    color: '#bbaa64',
  },
  listItemSubtitle: {
    fontSize: 11,
    color: '#aaa',
    width: 180,
  },
  arrow: {
    height: 13,
    width: 13,
    marginLeft: 45,
    marginTop: 5
  },
  showDate: {
    fontSize: 13,
    color: 'white',
    marginLeft: 45
  },
}
