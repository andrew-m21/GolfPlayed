import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ListView, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import GridView from "react-native-easy-gridview";
import SimpleInputContainer from "../Component/InputContainer/SimpleInputContainer";
import FeedbackToolbar from "./FeedbackToolbar";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <FeedbackToolbar/>
          <View style={styles.main}>
           <Image source={require("../../Images/tut1_logo.png")} style={styles.image}/>
            <Text style={styles.h1}>Let's make things better</Text>
            <Text style={styles.para}>We are constantly improving our system, so your feedback is greatly appriciated. </Text>
            <View style={styles.chatText}>
              <TextInput  secureTextEntry={this.props.secureTextEntry} placeholder={"Write your message"} multiline={true}
                placeholderTextColor="#333" underlineColorAndroid={'transparent'}  style={{flex: 1, justifyContent: 'flex-start'}} />   
            </View>

            <Text style={styles.para}><Text style={{color: "#bbaa64"}}>Click Here </Text>to add screenshot</Text>
            <TouchableOpacity>
              <Text style={styles.button}>Send Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }

}

const styles = {
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: 'center'
  },
  menu:{
    widht: 20,
    height: 30,
    position: 'absolute',
    top:0,
    left:0,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  main:{
    flex: 1,
    alignItems: 'center',
  },
  image:{
    marginTop: 30,
    width: 190, 
    height: 90,
    resizeMode: 'contain',
  },
  h1:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
  para:{
    color: "black",
    marginTop: 20,
    textAlign: 'center'
  },
  chatText:{
    width: 300,
    minHeight: 200,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10, 
    borderWidth: 1, 
    marginTop: 20,
    borderColor: '#ccc',
    backgroundColor: "#eee"
  },

  button:{
    width: 250,
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
    padding: 5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    color: 'black',
    textAlign: 'center'
  }
};
