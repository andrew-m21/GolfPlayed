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
import TopToolbar from "../Component/Toolbars/TopToolbar.js"
import PostOptionPopup from "../dashboard/PostOptionPopup.js"

const {
  MEMBERS_AREA_CHAT
} = RouterScene;

export default class MembersAreaInbox extends React.Component {
  
   constructor(props) {
    super(props)
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      showPostOption: false,
      searchText: '',
      searchHomeFeedText: '',
      topToolBarShow: true,
      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
      listDataSource: ds.cloneWithRows(this.listData),
    };
  }
  onShowPostOption = (show) => {
    this.setState({
      showPostOption: show
    })
  }
  showTopToolBar = (show) => {
    this.setState({
      topToolBarShow: show
    })
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
  render() {
    let handleToUpdate = this.props.handleToUpdate;
    return (
      <Image style={styles.container} source={require('../../Images/tut1_bg.png')} >
          <TopToolbar show={this.state.topToolBarShow} onSwipeDown={this.onSwipeDownToolbar} onSearch={this.onSwipeDown.bind(this)}/>
          
          <View style={{height:30,flexDirection:'row',backgroundColor: "rgba(187, 170, 100, 1)"}}>
            <Text style={styles.title1}>From</Text>
            <Text style={styles.title2}>Recevied</Text>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => this.props.showNewOptions(true)}>
            <Image style={styles.newPopup} source={require("../../Images/Connect/more.png")}/>
          </TouchableOpacity>
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
          <TouchableOpacity style={[styles.listItem, styles.lastItemPadding]} onPress={() => Actions[MEMBERS_AREA_CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <View style={styles.listItemInfo1}>
                <Text style={styles.listItemTitle}> {rowData.title} </Text>
                <Text style={styles.listItemSubtitle}> {rowData.date} </Text>
              </View>    
              <Text style={styles.subtitle}> {rowData.subtitle} </Text>  
              <Text style={styles.msg}> {rowData.msg} </Text>        
            </View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
        </View>
      );  
    }
    else if(rowId == 0)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, {marginTop: 20}]} onPress={() => Actions[MEMBERS_AREA_CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
            <View style={styles.listItemInfo1}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.date} </Text>
            </View>    
            <Text style={styles.subtitle}> {rowData.subtitle} </Text>  
            <Text style={styles.msg}> {rowData.msg} </Text>        
          </View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
        </View>
      );  
    }
    else
    {
      return(
        <View>
          <TouchableOpacity style={styles.listItem} onPress={() => Actions[MEMBERS_AREA_CHAT]()}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
            <View style={styles.listItemInfo1}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.date} </Text>
            </View>    
            <Text style={styles.subtitle}> {rowData.subtitle} </Text>  
            <Text style={styles.msg}> {rowData.msg} </Text>        
          </View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  listData = [
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
        image: require("../../Images/DashImages/profile.png"),
        unread: 10,
    },
    {
        title: "West Golf Club",
        date:"Oct 17.2017",
        subtitle: "Events - game requested Dec 5, 2017",
        msg: "jkhhghg hg hg hg hjg jh ghjg yu vuvu y uv iuv i vib iuygu yfuyu gjh gjh gh g ig i gi gikughi khgkgkg jkhg hj ghj gh ",
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
  title1: {
    position: "absolute",
    left:40,
    textAlign: "left",
    color: "black",
    fontSize: 16,
    marginTop: 4,
    backgroundColor:'transparent',
  },
  title2: {
    position: "absolute",
    right:40,
    textAlign: "right",
    color: "black",
    fontSize: 16,
    marginTop: 4,
    backgroundColor:'transparent',
  },
  text: {
    fontSize: 20,
    color: 'white',
    height: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
    
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
    height:100,
    marginTop:5
  },
  lastItemPadding:{
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 18,
    color: '#fff',
    position: "absolute",
    left:-5,
  },
  listItemSubtitle: {
    fontSize: 15,
    color: '#aaa',
    position: "absolute",
    right:-20,
  },
  msg: {
    fontSize: 14,
    color: '#aaa',
    marginRight:30,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(187, 170, 100, 1)',
  },
  listItemImage: {
    width: 70,
    height: 70,
    resizeMode:'contain',
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  listItemInfo1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
