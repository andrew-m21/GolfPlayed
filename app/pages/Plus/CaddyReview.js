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
export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 4
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
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
                Caddy Review</Text>

              <View
                style={{ backgroundColor: 'transparent', position: 'absolute', right: 15, }}>

                <Image style={styles.leftbuttonwhite} source={require('../../Images/DashImages/closeButton.png')} />
              </View>
            </View>

            <ScrollView style={{ backgroundColor: 'transparent', height: window.height }}>
              <View style={{ backgroundColor: 'transparent', }}>

                <View style={{ marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#93854F", fontSize: 18, }}>
                  CaddyName</Text>
                  <Text style={{ color: "#fff", fontSize: 15, }}>
                  CaddyCity CaddyCountry</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                  Rate Caddy</Text>
      
                  <Text style={{ marginTop:5,color: "transparent", }}/>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    starColor={'#BBAA64'}
                  />
                  <Text style={{ marginTop:5,color: "#fff", fontSize: 15, }}>
                    RatingWord</Text>
                    
                </View>

                <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    What could be improved?</Text>

                  <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Speed</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.CALCULATOR}>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Knowledge</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Accuracy</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Etiquette</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Personality</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.CALCULATOR}>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Appearance</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Other</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>


                <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{ marginLeft: 15, }}>
                  <Text style={{ marginTop: 10, color: '#fff', fontSize: 18, position: 'absolute', }}>
                    Add a comment</Text>
                </View>
                <View style={{ marginTop: 40 }}>

                  <TextInput style={styles.input}
                    placeholder={'Write something'}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor='#000'
                    underlineColorAndroid='transparent' />
                </View>

                <TouchableOpacity>
                  <View style={[styles.bottomButton]}>
                    <Text style={{
                      textAlign: 'center',
                      textAlignVertical: 'center', color: 'black',
                      fontSize: 15, backgroundColor: 'transparent'
                    }}>Submit Review</Text>
                  </View>
                </TouchableOpacity>



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
  headerView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    backgroundColor: '#F6F6F6',
    width: width - 35,
    height: 100,
    marginHorizontal: 15,
    paddingLeft: 15,
    borderRadius: 5,
    color: '#000',
  },
  greyFont: {
    color: '#fff',
    height: 45,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer1: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20, marginTop: 10,
    marginBottom: 10
  },
  inputContainer2: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5
  },
  greyFont1: {
    color: '#7f7f7f',
    height: 40,
    marginLeft: 10,
    marginRight: 10,

  },
  greyFont2: {
    color: '#7f7f7f',
    height: 100,
    marginLeft: 10,
    marginRight: 10,

  },
  coverImage: {
    width: window.width,
    height: window.height,
  },
  coverImage1: {
    width: window.width - 40,
    height: 160,
    borderRadius: 10,
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
  innerView: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20
  },
  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  fullName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 70,
    marginBottom: 1,
    backgroundColor: 'transparent',
    marginLeft: 10
  },
  memberSection: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: window.width / 2.5,
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    width: window.width - 40,
    height: 40,
    borderRadius: 50,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 70,
    marginTop: 30
  },
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    width: 180,
    height: 40,
    borderRadius: 50,
    margin: 5
  },
  bottomButton: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width - 40,
    height: 35,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  leftButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: (window.width / 2) - 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    padding: 5,
  },
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: (window.width / 2) - 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    padding: 5
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  gap: {
    width: 3,
  },
  modalContent: {
    backgroundColor: 'white',
    height: 300
  },
  modalInnerContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  rightArrow: {
    marginTop: 10,
    width: 20,
    height: 20,
    position: 'absolute',
  },
  rightArrow1: {
    marginTop: 10,
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: width - 40,
    borderRadius: 50,
    margin: 20,
    height: 40
  },
  MultiButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    borderRadius: 50,
    margin: 5
  },
}