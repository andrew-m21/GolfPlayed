import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ListView, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
import ChatToolbar from "./ChatToolbar";
import Bubble from './Bubble';
import PostOptionPopup from "./PostOptionPopup.js"
const {
  MEMBERS_AREA_INBOX
} = RouterScene;

export default class MemberAreaChat extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showPostOption: false,
        messages: [],
      };
  }
  onShowPostOption = (show) => {
    this.setState({
      showPostOption: show
    })
  }

  render() {
    return (
      <Image style={styles.container1} source={require("../../Images/tut1_bg.png")}>  
         <View style={styles.container}>
            <TouchableOpacity onPress={() => Actions[MEMBERS_AREA_INBOX]()}>
                <Image source={require('../../Images/DashImages/buttons/leftbutton_white.png')} style={styles.leftbuttonwhite}/>
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.name}>ClubName</Text>
                <Text style={styles.last1}>Admin</Text>
                <Text style={styles.last2}>Somerset west - cape Town</Text>
            </View>
            <TouchableOpacity onPress={() => this.onShowPostOption(true)}>
                <Image source={require('../../Images/Connect/more.png')} style={styles.add}/>
            </TouchableOpacity>
        </View>
        <View style={{height:1, backgroundColor: 'rgba(187, 170, 100, .5)',marginLeft:20,marginRight:20}}></View>                        
        <View style={styles.chatArea}>
          <View style={styles.chats}>
            <Bubble message="sdfjsldkfjs dfsdf sds df s sdf sdf " status="9:45 Asdf" image={require('../../Images/DashImages/profile.png')} 
              type={false}/>

              <Bubble message="sdfjsldkfj sdfs sdf sdfs sdf sd s fsdf sdfsd fsf ds" status="9:45 Asdf" image={require('../../Images/DashImages/profile.png')} 
              type={true}/>
          </View>
          <View style={styles.inputArea}>
            <TouchableOpacity>
              <Image style={styles.plus} source={require("../../Images/Connect/plus.png")}/>  
            </TouchableOpacity>
            <TextInput style={styles.chatText} secureTextEntry={this.props.secureTextEntry} placeholder={"Write your message"}
              placeholderTextColor="#333" underlineColorAndroid={'transparent'} clearButtonMode={'while-editing'} />   
            <TouchableOpacity>
              <Image style={[styles.plus, styles.media]} source={require("../../Images/Connect/camera.png")}/>
            </TouchableOpacity>
              <Image style={[styles.dots]} source={require("../../Images/Connect/dots.png")}/>
            <TouchableOpacity>
              <Image style={[styles.plus, styles.media]} source={require("../../Images/Connect/mic.png")}/>  
            </TouchableOpacity>
          </View>
        </View>
        <PostOptionPopup visible={this.state.showPostOption} onCancel={this.onShowPostOption}/>
     </Image>
    );
  }
}
const styles = {
  container: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 26,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  add:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  profile:{
      width: 40,
      height: 40,
      marginLeft: 20,
  },
  info:{
      justifyContent:'center',
      alignItems:'center',   
      flex:1,
      marginLeft: 10,
  },
  name:{
      color: '#fff',
      fontSize: 18,
  },
  last1:{
      color: '#eee',
      fontSize: 14, 
      marginTop:10
  },
  last2:{
    color: '#eee',
    fontSize: 14,

  },
  container1: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  chatArea:{
    flex: 1,
  },
  inputArea:{
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  plus:{
    width: 25,
    height: 25,
    resizeMode:'contain',
  },
  chatText:{
    flex: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    borderWidth: 0.5, 
    borderColor: '#333',
    marginLeft: 5,
    height:40
  },
  media:{
    marginLeft: 5,
    resizeMode:'contain',
  },
  dots:{
    height: 25,
    resizeMode:'contain',
    marginLeft: 5,
  }
};
