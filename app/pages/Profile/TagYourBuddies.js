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
    Dimensions,
    ScrollView
  } from 'react-native';
import {Actions} from 'react-native-router-flux'
import RouterScene from '../../Constant/constant';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
import { Button } from 'react-native-material-design';

const {  PROFILE_SCREEN ,HOME_COURSE_AND_SOCETIES,
  CREATE_NEWS_FEED_POST,
  MEMBERS_AREA_NEWS_FEEDS ,
  MEMBERS_SECTION_PAGE2,
  MEMBERS_SECTION_PAGE1
} = RouterScene;
const window = Dimensions.get('window');
const profileImage = require('../../Images/DashImages/profile.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const leftbutton_white = require('../../Images/DashImages/buttons/close.png');
const fullName = "{{fullName}}";
const homeClub = "{{homeClub}}";
const Clubname= "{{Erinvale Golf Club}}";
const Totallmembers = "{{20442 Members}}";
const ClubLocation= "{{Cape Town, South Africa}}";
const backgroundimage = require('../../Images/tut1_bg.png');
const addperson = require('../../Images/addperson.png');

//MembersArea1
export default class MembersArea extends Component {
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
        CREATE_NEWS_FEED_POST = () => {
      //By harshit
      Actions[CREATE_NEWS_FEED_POST]()
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
    listData = [
      {
          title: "Andre De Decker",
          image: require("../../Images/DashImages/profile.png"),
      },
      {
          title: "Andrew Dunn",
          image: require("../../Images/DashImages/profile.png"),
          
      },
      {
          title: "Andrew Mcdonald",
          image: require("../../Images/DashImages/profile.png"),
          
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
              </View>
             
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/plusButton.png")}/></View>
            </TouchableOpacity>
          
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
                <Text style={styles.listItemTitle}>{rowData.title} </Text>
              </View>
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/plusButton.png")}/></View>
            </TouchableOpacity>
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
              </View>
             
              <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../Images/DashImages/plusButton.png")}/></View>
            </TouchableOpacity>
          </View>
        );
      }
    }

    render() {
      
        return (
          
               <Image style={{resizeMode:'contain',height:window.height,width:window.width}} source={backgroundimage} >
                 <View style={styles.container}>
               <ScrollView>
                  <View style={styles.headerView}>
                    <View style={{alignItems:"center",alignContent:'center',flex:1}}>
                      <Text style={styles.memberSection}> Tag buddies </Text>
                    </View>
                    <TouchableOpacity onPress={this.CREATE_NEWS_FEED_POST}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputContainer}>
                      <TextInput 
                          style={styles.greyFont}
                          placeholder={'andr...'}
                          //value={'andr...'}
                          underlineColorAndroid={'#ffffff'}
                          clearButtonMode={'while-editing'}
                      />
                  </View>
                  <ListView showsVerticalScrollIndicator={false} 
                    removeClippedSubviews={false}
                    dataSource={this.state.listDataSource} 
                    renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />
              </ScrollView>
          </View>     
     </Image>             
    );
  }
}


  


const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        marginBottom:15,
        backgroundColor:'transparent',
        borderRadius:  8,
        height:window.height
    },
    headerView: {
        flexDirection:'row',
        backgroundColor: 'transparent',
        height:50,
        marginTop:10
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
    inputContainer: {
      top:20,
      paddingLeft:15,
      paddingTop: 5,
      paddingBottom: 5,
      marginBottom: 24,
      backgroundColor: '#ffffff',
      borderRadius: 50,
      margin:20
  },
  greyFont: {
    color: '#7f7f7f',
    height:26,
    marginLeft:10,
    marginRight:10,
  },
    coverImage: {
        width:window.width,
        height: 50,
    },
    leftbuttonwhite: {
        width:20,
        height: 20,
        marginTop:20,
        marginRight:10,
        alignSelf: 'flex-end',
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
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      width: window.width-60,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 50,
      margin: 20 
    },
    memberSection: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'transparent',
        marginTop:20,
        textAlign:'center',
        marginLeft:10
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
        width: 30,
        height: 30,
        marginLeft: 10,
      },
      listItemTitle:{
       color:'white'
      }
}
