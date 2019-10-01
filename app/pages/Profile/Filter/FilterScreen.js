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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js';
import FilterTabs from './FilterTabs.js';

const {
  CHAT
} = RouterScene;

export default class FilterScreen extends React.Component {
  
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
      <View style={styles.container}>
      <Image style={styles.pp} source={require("../../../Images/DashImages/profile.png")}/>
        <Text style={styles.title}>Name</Text>
         <Text style={styles.subtitle}>Course Name</Text>
       
       <TextInput  secureTextEntry={this.props.secureTextEntry} placeholder={"Search"}
                placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid={'#bbaa64'} style={{color:"#fff"}} />          
        <TouchableOpacity style={styles.closeButton} onPress={() => Actions.pop()}>
          <Image style={styles.newPopup} source={require("../../../Images/DashImages/buttons/close.png")}/>
        </TouchableOpacity>
        <FilterTabs style={styles.buttonGroup} first={styles.active} second={styles.normal} handleToUpdate={handleToUpdate.bind(this)}/>
         <View style={{height:1.5, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:5, marginRight: 5,top:10}}>
                     </View>
                     <View style={{marginBottom:10}}><Text style={{marginLeft:90,top:24,color:'white',fontSize:10}}>Countries Played 8</Text><Text style={{marginLeft:210,top:10,color:'white',fontSize:10}}>Courses Played 32</Text>
 <View style={{height:1.5, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:90, marginRight: 5,top:10}}>
                     </View>
                     </View> 
        <ListView showsVerticalScrollIndicator={false} 
            removeClippedSubviews={false}
            dataSource={this.state.listDataSource} 
            renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />

      </View>
    );
  }

  renderListItem(rowData, rowId) {
    if(rowId == this.listData.length - 1)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, styles.lastItemPadding]}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else if(rowId == 0)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, {marginTop: 20}]}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>
          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );  
    }
    else
    {
      return(
         <View>
          <TouchableOpacity style={styles.listItem}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
             <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>

          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
        </View>
      );
    }
  }

  listData = [
    {
        title: "Couses Filter 1",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 1,
    },
    {
        title: "Couses Filter 2",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 2,
    },
    {
        title: "Couses Filter 3",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 3,
    },
    {
        title: "Couses Filter 4",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 4,
    },
    {
        title: "Couses Filter 5",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 5,
    },
    {
        title: "Couses Filter 6",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 6,
    },
    {
        title: "Couses Filter 7",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 7,
    }
  ];

}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 12,
    top: 40,
  },
   pp: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 10,
    top: 30,
  },
  newPopup: {
    width: 16,
    height: 16,
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 18,
    marginTop: 30,
    marginLeft:75,
    backgroundColor:'transparent'
  },
   subtitle: {
    textAlign: "left",
    color: "white",
    fontSize: 12,
    marginTop: 2,
    marginLeft:75,
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
    fontSize: 15,
    color: '#fff',
  },
  listItemSubtitle: {
    fontSize: 12,
    color: '#aaa'
  },
  listItemImage: {
    width: 50,
    height: 50,
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
    borderRadius: 10,
    padding: 5,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 10,
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
