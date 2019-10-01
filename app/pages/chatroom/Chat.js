import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ListView, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import ChatToolbar from "../Component/Toolbars/ChatToolbar";
import Bubble from './Bubble';

export default class Chat extends Component {
  state = {
    messages: [],
  };

  componentWillMount() {
  
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../Images/tut1_bg.png")}>  
        <ChatToolbar />
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
            <TouchableOpacity>
              <Image style={[styles.dots]} source={require("../../Images/Connect/dots.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={[styles.plus, styles.media]} source={require("../../Images/Connect/mic.png")}/>  
            </TouchableOpacity>
          </View>
        </View>
     </Image>
    );
  }
}
const styles = {
  container: {
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
    width: 30,
    height: 30,
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
    marginLeft: 5
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
