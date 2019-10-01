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

var CustomActionSheet = require('react-native-custom-action-sheet')
const options = [
  {
    title: 'Upload photo',
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Use camera',
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },]

export default class ShowVideos extends React.Component {

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
                Show Videos</Text>

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
                  flexDirection: 'row', marginLeft: 10,
                  marginTop: 35, alignItems: 'center',
                }}>
                  <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../../Images/DashImages/profile.png')} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, }}>
                      fullName</Text>
                    <Text style={{ color: "#fff", fontSize: 16, }}>
                      homeClub</Text>
                    <Text style={{ color: "#fff", fontSize: 14, }}>
                      timeAgo, locationCity, locationCountry</Text>
                  </View>
                  <View
                    style={{ backgroundColor: 'transparent', position: 'absolute', right: 14, }}>
                    <TouchableOpacity>
                      <Image style={{ width: 35, height: 35, }} source={require('../../Images/DashImages/closeButton.png')} />
                    </TouchableOpacity>
                  </View>

                </View>

                <View style={{ marginTop: 10, marginLeft: 10 }}>
                  <Text style={{ color: "#fff", fontSize: 16, }}>
                    full comment Here is the comment of the round over a maximum of 2 lines. #Hasttag and @users in Medium.</Text>
                </View>

                <View style={{
                  height: 200,
                  marginTop: 10,
                  borderRadius: 10, backgroundColor: 'transparent',
                }}>
                  <Image style={{ height: 200, borderRadius: 10 }} source={require('../../Images/DashImages/dashimg.png')} />
                </View>

                <View style={{ marginTop: 10, marginLeft: 10 }}>
                  <Text style={{ color: "#fff", fontSize: 16, }}>
                    full comment Here is the comment of the round over a maximum of 2 lines. #Hasttag and @users in Medium.</Text>
                </View>

                <View style={{
                  marginTop: 10, marginLeft: 10, marginRight: 10,
                  justifyContent: 'space-between', flexDirection: 'row'
                }}>
                  <Text style={{ color: "#fff", fontSize: 16, }}>
                    full comment..</Text>
                  <Text style={{ color: "#fff", fontSize: 16, }}>
                    full comment</Text>
                </View>

                <View style={{
                  marginTop: 10, marginLeft: 10, marginRight: 10,
                  justifyContent: 'space-between', flexDirection: 'row'
                }}>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image style={{ width: 20, height: 20, }} source={require('../../Images/DashImages/profile.png')} />
                    <Text style={{ color: "#fff", fontSize: 16, }}>
                      Like</Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image style={{ width: 20, height: 20, }} source={require('../../Images/DashImages/profile.png')} />
                    <Text style={{ color: "#fff", fontSize: 16, }}>
                      Comment</Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image style={{ width: 20, height: 20, }} source={require('../../Images/DashImages/profile.png')} />
                    <Text style={{ color: "#fff", fontSize: 16, }}>
                      Share</Text>
                  </View>

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

}