// By Dmitry
import React, { Component } from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Bubble extends Component{

  render(){
    if(this.props.type)
    {
      return this.initilizeMyBubble();
    }
    else
    {
      return this.initilizeOtherBubble();
    }
  }

  initilizeOtherBubble(){
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.image} style={styles.profile}/>
        </View>
        <View style={styles.messageBox}>
            <Text style={styles.message}>{this.props.message + "sdfkjsdflk"}</Text>
            <Text style={styles.status}>{this.props.status}</Text>
        </View>
      </View>
    );
  }

  initilizeMyBubble(){
    return (
      <View style={styles.myContainer}>
        <View>
          <Image source={this.props.image} style={[styles.profile , {left:0, marginRight: 20} ]}/>
        </View>
        <View style={[styles.messageBox, {backgroundColor: "#bbaa64", marginRight:5}]}>
          <Text style={styles.message}>{this.props.message}</Text>
          <Text style={styles.myStatus}>{this.props.status}</Text>  
        </View>
      </View>
    );
  }

}


const styles = {
  container: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: '100%',
    flexDirection :'row',
  },
  myContainer:{
    backgroundColor: 'transparent',
    paddingLeft: 45,
    paddingRight: 10,
    marginTop: 10,
    width: '100%',
    flexDirection :'row-reverse',
  },
  messageBox:{
    maxWidth: '80%',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginLeft: 45,
    minWidth: '45%'
  },
  profile:{
      width: 40,
      height: 40,
      position: 'absolute',
      bottom:1
  },
  status:{
    fontSize: 10,
    alignSelf: 'flex-end',
    color: '#aaa',
  },
  myStatus:{
    fontSize: 10,
    alignSelf: 'flex-end',
    color: '#666',
  },
  message:{
      color: 'black',
      fontSize: 14,
  },
} 
