import React, {Component} from 'react'
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js';

const {
  BUDDIES_SCREEN
} = RouterScene;

export default class ProfileScreen extends Component
{
    
    constructor(props) 
    {
        super(props);
    }

    render() {

      return (
        
          <Image style={styles.container} source={require('../../Images/tut1_bg.png')}>
            <Text style={styles.title}>Course Review</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => Actions.pop()}>
              <Image style={styles.closeImage} source={require("../../Images/DashImages/buttons/close.png")}/>
            </TouchableOpacity> 
            <ScrollView>
              <Text style={styles.heading}>courseName</Text>
              <Text style={styles.subHeading}>courseCity, courseCountry</Text>

              <Text style={styles.boldHeading}>Overall experience</Text>
              
              <View style={styles.ratingContainer}>
                <Image style={styles.ratingStar} source={require('../../Images/AuthImages/clearBtn.png')}/>
                <Image style={styles.ratingStar} source={require('../../Images/AuthImages/clearBtn.png')}/>
                <Image style={styles.ratingStar} source={require('../../Images/AuthImages/clearBtn.png')}/>
                <Image style={styles.ratingStar} source={require('../../Images/AuthImages/clearBtn.png')}/>
                <Image style={styles.ratingStar} source={require('../../Images/AuthImages/clearBtn.png')}/>
              </View>

              <Text style={styles.ratingWord}>ratingWord</Text>

              <View style={styles.line} ></View>

              <Text style={[styles.boldHeading, {fontWeight: 'normal', marginTop: 10,}]}>What could be improved?</Text>

              <View style={styles.areas}>
                <TouchableOpacity style={[styles.area, {width: 70}]} onPress={() => Actions[BUDDIES_SCREEN]()}>
                  <Text style={styles.areaText}>Staff</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.area, {width: 110}]}>
                  <Text style={styles.areaText}>Practice area</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.area, {width: 85}]}>
                  <Text style={styles.areaText}>Pro shops</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.area, {width: 70}]}>
                  <Text style={styles.areaText}>Carts</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.areas}>
                <TouchableOpacity style={[styles.area, {width: 100}]}>
                  <Text style={styles.areaText}>Parking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.area, {width: 150}]}>
                  <Text style={styles.areaText}>Food and bev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.area, {width: 85}]}>
                  <Text style={styles.areaText}>Other</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.line} ></View>

              <View style={styles.chatText}>
                <TextInput secureTextEntry={this.props.secureTextEntry} placeholder={"Write your message"} multiline={true}
                  placeholderTextColor="#333" underlineColorAndroid={'transparent'}  style={{flex: 1, justifyContent: 'flex-start'}} />   
              </View>

              <TouchableOpacity>
                <Text style={styles.button}>Edit Review</Text>
              </TouchableOpacity>
            </ScrollView>
          </Image>
      );
    }

}


const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: 30,
      paddingBottom: 0,
      paddingRight: 10,
      paddingLeft: 10,
    },
    closeButton: {
      position: "absolute",
      width: 20,
      height: 20,
      right: 25,
      top: 40,
    },
    closeImage: {
      width: 20,
      height: 20
    },
    title: {

        backgroundColor:'transparent',
      textAlign: "center",
      color: "white",
      fontSize: 20,
      marginTop: 5,
      marginBottom: 10,
    },
    line:{
      width: '100%',
      height: 0.5,
      backgroundColor: "#bbaa64",
      marginTop: 20 
    },
    heading:{
        backgroundColor:'transparent',
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: "#bbaa64"
    },
    subHeading:{
        backgroundColor:'transparent',
      alignSelf: 'center',
      fontSize: 12,
      color: "#fff"
    },
    boldHeading:{
        backgroundColor:'transparent',
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: "#fff",
      fontWeight: 'bold'
    },
    ratingContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 200,
      alignSelf: 'center',
      marginTop: 10,
    },
    ratingStar:{
      width: 30,
      height: 30,
      resizeMode: "contain"
    },
    ratingWord:{
        backgroundColor:'transparent',
      fontSize: 13,
      color: "#fff",
      marginTop: 20,
      alignSelf: 'center'
    },
    areas:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    area:{
      width: 80,
      height: 40,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#fff',
      borderRadius: 50,
    },
    chatText:{
      width: '100%',
      minHeight: 150,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10, 
      borderWidth: 1, 
      marginTop: 20,
      borderColor: '#ccc',
      backgroundColor: "#eee",
      alignSelf: "center"
    },
    button:{
      width: 250,
      height: 30,
      marginTop: 20,
      marginRight: 50,
      marginLeft: 50,
      padding: 5,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#eee',
      color: 'black',
      textAlign: 'center',
      marginBottom: 10,
    }

});
