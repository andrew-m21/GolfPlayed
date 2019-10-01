import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  ToastAndroid, Dimensions, ScrollView, Slider, Picker
} from 'react-native';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import StarRating from 'react-native-star-rating';
import InputContainer from './InputContainer';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const backgroundimage = require('../../Images/tut1_bg.png');

const {

    MAIN_CONTENT,
  AUTHENTICATION,
  LOG_IN,
  ROOT_SCENE,
  SIGN_UP,
  FORGET_PASSWORD,
  INTRO_SLIDES,
  DASH_BOARD,
} = RouterScene;

var CustomActionSheet=require('react-native-custom-action-sheet')
const options = [
  {
    title: 'Upload photo',
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Use camera',
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Enter stats',
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },]

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#000000'}
        />
        <Image style={styles.coverImage} source={backgroundimage} >

          <View style={{ backgroundColor: 'transparent', }}>
            <View style={{ backgroundColor: 'transparent', marginTop: 20, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity
                style={{ position: 'absolute', left: 15, }}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>

              <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, position: 'absolute', }}>
                Scorecard & Stats</Text>

              <View
                style={{ backgroundColor: 'transparent', position: 'absolute', right: 14, }}>
                <TouchableOpacity>
                  <Image style={styles.leftbuttonwhite} source={require('../../Images/DashImages/plusButton.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={{ backgroundColor: 'transparent', height: window.height }}>
              <View style={{ backgroundColor: 'transparent', }}>

                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    No Scorecard or Stats added</Text>

                  <Text style={{ marginTop: 20, textAlign: 'center', color: "#fff", fontSize: 15, }}>
                    Tap the plus button to add your scorecard or stats to this round</Text>
                </View>

                <View>
                  <CustomActionSheet modalVisible={this.props.visible} onCancel={() => this.props.onCancel(false)} >
                    <View style={styles.buttonGroup} >
                      {
                        options.map((item, index) => (
                          <TouchableOpacity style={styles.button}>
                            <Image style={styles.icon} source={item.image} />
                            <Text style={styles.text}> {item.title} </Text>
                          </TouchableOpacity>
                        )
                        )
                      }
                    </View>
                  </CustomActionSheet>
                </View>

              </View>
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
    height: window.height
  },
  coverImage: {
    width: window.width,
    height: window.height,
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
  buttonGroup: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 20
  },
  icon: {
    margin: 20,
    width: 30,
    height: 30
  }
}