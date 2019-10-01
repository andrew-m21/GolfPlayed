import React, {Component} from 'react'
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
    Dimensions
  } from 'react-native';
import {Actions} from 'react-native-router-flux'
import RouterScene from '../../Constant/constant';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';

const {  PROFILE_SCREEN ,HOME_COURSE_AND_SOCETIES,MEMBERS_SECTION_PAGE2 } = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const backgroundImage = require('../../Images/DashImages/SCREEN-BUDDY-GP-APP.png');
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname= "{{Erinvale Golf Club}}";
const Totallmembers = "{{20442 Members}}";
const ClubLocation= "{{Cape Town, South Africa}}";
//MembersArea1
export default class MembersSectionPage1 extends Component {
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
            listDataSource: ds.cloneWithRows(this.listData),
          };
        }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    };

    MEMBERS_SECTION_PAGE2 = () => {
      //By harshit
      Actions[MEMBERS_SECTION_PAGE2]()
    };
    HOME_COURSE_AND_SOCETIES = () => {
      //By harshit
      Actions[HOME_COURSE_AND_SOCETIES]()
    };

    listData = [
        {
            title: "Eeinvale GC",
            image: require("../../Images/DashImages/profile.png"),
            unread: 1,
        },
        {
            title: "SW Burners",
            image: require("../../Images/DashImages/profile.png"),
            unread: 3,
        },
        {
            title: "Erivale kings",
            image: require("../../Images/DashImages/profile.png"),
            unread: 10,
        }
      ];

    renderListItem(rowData, rowId) {
        if(rowId == this.listData.length - 1)
        {
          return(
            <View>
              <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE2} style={[styles.listItem, styles.lastItemPadding]}>
                <Image style={styles.listItemImage} source={rowData.image} />
                <View style={styles.listItemInfo}>
                  <Text style={styles.listItemTitle}> {rowData.title} </Text>
                </View>
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
              <TouchableOpacity onPress={this.MEMBERS_SECTION_PAGE2} style={styles.listItem} >
                <Image style={styles.listItemImage} source={rowData.image} />
                <View style={styles.listItemInfo}>
                  <Text style={styles.listItemTitle}>{rowData.title} </Text>
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
              <TouchableOpacity style={styles.listItem} onPress={this.MEMBERS_SECTION_PAGE2}>
                <Image style={styles.listItemImage} source={rowData.image} />
                <View style={styles.listItemInfo}>
                  <Text style={styles.listItemTitle}> {rowData.title} </Text>
                </View>
                <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>
                <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/rightbutton.png")}/></View>
              </TouchableOpacity>
              <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 90, marginRight: 10}}></View>
            </View>
          );
        }
      }

    render() {
      
        return (
            <View style={styles.container}>
                <Image style={styles.coverImage} source={dashImage} >
                    <View style={styles.headerView}>
                    <TouchableOpacity onPress={this.HOME_COURSE_AND_SOCETIES}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                        </TouchableOpacity>
                        <Text style={styles.memberSection}> Members Section </Text>
                    </View>
               <View style={styles.innerView}> 
                <Image style={styles.profileImage} source={profileImage} />
                    <View style={styles.nameView}> 
                        <Text style={styles.fullName}> {Clubname} </Text>
                        <Text style={styles.homeClub}> {Totallmembers} </Text>
                        <Text style={styles.homeClub}> {ClubLocation} </Text>
                    </View>                        
                </View>
                </Image>
                <View style={{height:2, backgroundColor: "rgba(187, 170, 100, 0.5)",}}></View>
                <Image
                  style={{resizeMode:'stretch',height:window.height,width:window.width}}  
                  source={backgroundImage}>
                  <ListView 
                    showsVerticalScrollIndicator={false} 
                    removeClippedSubviews={false}
                    dataSource={this.state.listDataSource} 
                    
                    renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} 
                    
                    />
                 </Image>
      </View>
    );
  }
}


  


const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        marginBottom:15,
        backgroundColor:'#3B3A3A',
        borderRadius:  8,
        height:window.height
    },
    headerView: {
        flexDirection:'row',
        backgroundColor: 'transparent',
        flex:1
    },
    profileImage: {
        width: 70,
        height:70,
        marginTop:60,
        marginLeft:20,
        marginBottom:10,
        alignSelf:'flex-start',
        resizeMode:'contain',
        marginLeft:10,
        borderRadius:2,
        borderColor:'#fff',
       
    },
    coverImage: {
        width:window.width,
        height: 200,
    },
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:20,
        marginLeft:10,
        alignSelf: 'flex-start',
    },
    innerView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    nameView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection:'column'
    },
    fullName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop:70,
        marginBottom:1,
        backgroundColor:'transparent',
        marginLeft:10
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
        marginLeft:10,
        fontSize: 13,
        color: 'white',
        backgroundColor:'transparent'
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
}
