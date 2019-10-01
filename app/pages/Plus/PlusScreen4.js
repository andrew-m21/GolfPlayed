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
    ScrollView,
    Switch, Button
} from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChoiceContainer from '../signup/Reusable/ChoiceContainer';
import { Dialog } from 'react-native-simple-dialogs';

import Profile from "../dashboard/Profile";
import HomeFeed from "../dashboard/HomeFeed.js";
//import SearchBar from "./SearchBar.js";
import Tab from "./AddARoundAddCaddyTab/Tabs"
import MyPost from './AddARoundAddCaddyTab/MyPost';
import Filter from './AddARoundAddCaddyTab/Filter';
import Saved from './AddARoundAddCaddyTab/Saved';

const {
    MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL,
    MEMBERS_AREA_MARKET_PLACE

} = RouterScene;

const backgroundimage = require('../../Images/tut1_bg.png');
const dashImage = require('../../Images/DashImages/dashimg.png');
const Marketplace = "{{Marketplace}}";
const Drivers = "{{Drivers}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const profileImage = require('../../Images/DashImages/profile.png');

export default class MembersAreaMarketPlaceDriver extends React.Component {
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
      }
    handlePress(i) {
        alert(i)
      }
    onShowPostOption = (show) => {
      this.setState({
        showPostOption: show
      })
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

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.headerView}>
                        <View style={styles.flex_column}>
                            <Text style={styles.fullName}> Hole </Text>
                        </View>
                      <View style={{alignItems:'flex-end',marginTop:20,marginRight:20}}>
                        <TouchableOpacity onPress={this.MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL}>
                          <Image style={styles.plustop} source={require("../../Images/DashImages/buttons/plus.png")}/>
                        </TouchableOpacity>
                      </View>                           
                    </View>
                    <ScrollView>
                    <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> Score </Text>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',margin:10}}>
                        <Text style={{marginLeft:50,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 1</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 2</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 3</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 4</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 5</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 6</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 7</Text>
                    </View>
                    <View style={{height:.5, backgroundColor: "white",marginLeft:30,marginRight:30,marginTop:10}}></View>
                    <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:"bold",marginTop:30}}> Putts</Text>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',margin:10}}>
                        <Text style={{marginLeft:50,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 1</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 2</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 3</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 4</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 5</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 6</Text>
                        <Text style={{marginLeft:20,textAlign:'center',color:'white',fontSize:15,fontWeight:"bold"}}> 7</Text>
                    </View>
                    <View style={{height:.5, backgroundColor: "white",marginLeft:30,marginRight:30,marginTop:10}}></View>
                    <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:"bold",marginTop:30}}> Putts</Text>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',margin:10}}>
                    <Image style={styles.plus} source={require("../../Images/DashImages/buttons/plus.png")}/>
                    <Image style={styles.plus} source={require("../../Images/DashImages/buttons/plus.png")}/>
                    <Image style={styles.plus} source={require("../../Images/DashImages/buttons/plus.png")}/>
                    </View>
                    <View style={{height:.5, backgroundColor: "white",marginLeft:30,marginRight:30,marginTop:10}}></View>
                    <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:"bold",marginTop:30}}> Putts</Text>
                    </View>
                    <View style={{flexDirection:"column",alignContent:'center',alignItems:'center',margin:10}}>
                    <Image style={styles.plus2} source={require("../../Images/DashImages/buttons/plus.png")}/>
                      <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',margin:10}}>
                      <Image style={styles.plus2} source={require("../../Images/DashImages/buttons/plus.png")}/>
                      <Image style={styles.plus2} source={require("../../Images/DashImages/buttons/plus.png")}/>
                      <Image style={styles.plus2} source={require("../../Images/DashImages/buttons/plus.png")}/>
                      </View>
                    <Image style={styles.plus2} source={require("../../Images/DashImages/buttons/plus.png")}/>
                    </View>
                    <View style={{height:.5, backgroundColor: "white",marginLeft:30,marginRight:30,marginTop:10}}></View>
                    <TouchableOpacity>
                      <View style={[styles.bottomButton]}>
                          <Text style={{
                              textAlign: 'center',
                              textAlignVertical: 'center', color: 'black',
                              fontSize: 15, backgroundColor: 'transparent'
                          }}>Add round</Text>
                      </View>
                  </TouchableOpacity>
                  </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        borderRadius: 8,
        width:window.width,
        height:window.height, 
        backgroundColor: 'black',
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        alignSelf: 'flex-start',
        marginTop:20,
        marginLeft:10
    },
    tabs:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
      },
    coverImage: {
        width:window.width,
        height: 90,
    },
    bottomButton: {
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F6F6F6',
      width: window.width - 40,
      height: 35,
      marginHorizontal: 20,
      borderRadius: 20,
      margiButtom:50
  },
    headerView: {
        flexDirection:'row',
        backgroundColor: 'transparent',
    },
    plus:{
        alignSelf:'center',
        marginLeft:60,
        width: 20,
        height: 20,
    },
    plus2:{
        alignSelf:'center',
        marginLeft:20,
        width: 20,
        height: 20,
    },
    plustop:{
        alignSelf:'center',
        width: 20,
        height: 20,
    },
    flex_column: {
        flex:1,
        alignItems:'center',
        flexDirection: 'column',
        alignItems:'center',
        marginTop: 15,
    },
    fullName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        textAlign:'center'
    },
    homeClub: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign:'center'
    },
} 