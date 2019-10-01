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
  ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js';
import ChatButtonGroup from './ChatButtonGroup.js';

const {
  CHAT
} = RouterScene;

export default class FirstScreen extends React.Component {
  
   constructor(props) {
    super(props)
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      searchText: '',
      searchHomeFeedText: '',

      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
      listDataSource: ds.cloneWithRows(this.listData),
    };
  }

  render() {
    let handleToUpdate = this.props.handleToUpdate;
    return (
      <Image style={styles.container} source={require('../../Images/tut1_bg.png')} >
        <Text style={styles.title}>Connect</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.showNewOptions(true)}>
          <Image style={styles.newPopup} source={require("../../Images/Connect/more.png")}/>
        </TouchableOpacity>
        <ChatButtonGroup style={styles.buttonGroup} first={styles.active} second={styles.normal} handleToUpdate={handleToUpdate.bind(this)}/>
        <ListView showsVerticalScrollIndicator={false} 
            removeClippedSubviews={false}
            dataSource={this.state.listDataSource} 
            renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />
      </Image>
    );
  }

  renderListItem(rowData, rowId) {
    if(rowId == this.listData.length - 1)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, styles.lastItemPadding]} onPress={() => Actions[CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.status}>12:45 AM</Text></View>
            <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else if(rowId == 0)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, {marginTop: 20}]} onPress={() => Actions[CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else
    {
      return(
        <View>
          <TouchableOpacity style={styles.listItem} onPress={() => Actions[CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.status}>12:45 AM</Text></View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );
    }
  }

  listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    }
  ];

}

const styles = {
  container: {
    width: '100%',
    height: '100%'
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
    backgroundColor:'transparent'
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
    paddingRight:10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding:{
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 20,
    color: '#fff',
  },
  listItemSubtitle: {
    fontSize: 12,
    color: '#aaa'
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
    paddingLeft: 10
  },
  badgeContainer:{
    justifyContent:'center',
  },
  badge:{
    color: 'black',
    backgroundColor: '#bbaa64',
    borderRadius: 100,
    padding: 5,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
  },
  status:{
    color: '#aaa',
    fontSize: 10,
    marginRight: 5,
  },
  rightArrow:{
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  }
}
