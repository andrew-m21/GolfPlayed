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
import SimpleInputContainer from '../../Component/InputContainer/SimpleInputContainer';

const { 
  EXPLORER_COMMUNITY_PRIVACY

} = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../../Images/DashImages/profile.png');
const backgroundimage = require('../../../Images/tut1_bg.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname = "{{Erinvale Golf Club}}";
const Totallmembers = "{{20442 Members}}";
const ClubLocation = "{{Cape Town, South Africa}}";
//MembersArea1
export default class CreateACommuinities extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      listDataSource: ds.cloneWithRows(this.listData),
    };
  }

  MEMBERS_SECTION_PAGE2 = () => {
    //By harshit
    Actions[MEMBERS_SECTION_PAGE2]()
  };
  EXPLORER_COMMUNITY_PRIVACY = () => {
    //By harshit
    Actions[EXPLORER_COMMUNITY_PRIVACY]()
  };

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
          <TouchableOpacity style={[styles.listItem, styles.lastItemPadding]}>
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
          <TouchableOpacity style={styles.listItem} >
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
          <TouchableOpacity style={styles.listItem}>
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
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
        <View style={{height:'100%',width:'100%'}}>
            <View style={{justifyContent:'center',alignContent:'center',marginTop:25,flexDirection:'row', width:'100%'}}>
              <TouchableOpacity  style={{position:'absolute',left:10,marginTop:5}}
                onPress={() => Actions.pop()}>
                <Image style={{height:25,width:25,}} source={leftbutton_white} />
              </TouchableOpacity>
              <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginTop:5}}> Create a community </Text>
              <TouchableOpacity onPress={this.EXPLORER_COMMUNITY_PRIVACY}
              style={{position:'absolute',right:10,marginTop:5}}>
              
              <Text style={{color:'white'}}> 
                Done
              </Text>
              </TouchableOpacity>
              
            </View>
            <ScrollView style={{ height: window.height + 100 }}>
              <View style={{ backgroundColor: '#ffffff',borderRadius: 50,marginLeft: 20,marginRight: 20,marginTop: 20,marginBottom: 5}}>
                <TextInput
                  style={styles.greyFont}
                  placeholder={'Name your community'}
                  underlineColorAndroid={'transparent'}
                  clearButtonMode={'while-editing'}
                />
                <View style={{ height: .5, backgroundColor: "black", marginLeft: 20, marginRight: 20, }}></View>
              </View>
              <View style={styles.innerView}>
                <Image style={styles.coverImage1} source={dashImage} >
                  <View style={styles.nameView}>
                    <Text style={styles.fullName}> Upload an image of your event </Text>
                  </View>
                </Image>
                <View style={{justifyContent:'center',alignContent:'center',marginTop:10,flexDirection:'row', width:'100%'}}>
                  <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:5}}> Invite your buddies to the community</Text>
                </View>
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.greyFont1}
                  placeholder={'Mich...'}
                  underlineColorAndroid={'#ffffff'}
                  clearButtonMode={'while-editing'}
                />
              </View>
                  <ListView 
                    showsVerticalScrollIndicator={false} 
                    removeClippedSubviews={false}
                    dataSource={this.state.listDataSource} 
                    
                    renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} 
                    
                    />
              <View style={{ height: 1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginTop: 10 }}></View>

            </ScrollView>
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
    marginTop:20
  },
  greyFont: {
    color: '#fff',
    height: 45,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer1: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20, marginTop: 10,
    marginBottom: 10
  },
  greyFont1: {
    color: '#7f7f7f',
    height: 40,
    marginLeft: 10,
    marginRight: 10,

  },
  coverImage: {
    width: window.width,
    height: window.height,
    resizeMode: 'contain',
    alignItems: 'flex-start'
  },
  coverImage1: {
    width: window.width - 40,
    height: 200,
    borderRadius: 10,
  },
  innerView: {
    marginRight:20,
    marginLeft: 20,
  },
  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  fullName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 70,
    marginBottom: 1,
    backgroundColor: 'transparent',
    marginLeft: 10
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
}
