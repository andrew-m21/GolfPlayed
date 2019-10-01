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
  Switch, Button,
  Picker,
} from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from "react-native-router-flux";
import Modal from 'react-native-modal'
import RouterScene from '../../Constant/constant';
import StarRating from 'react-native-star-rating';

const {
    ADDYOUROWNPIN,
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
const cardPic = require("../../Images/DashImages/clubIcon.png");

const listData = [
  {
    title: "Eeinvale GC",
    image: require("../../Images/DashImages/profile.png"),
    unread: 1,
  },
  {
    title: "SW Burners",
    image: require("../../Images/DashImages/profile.png"),
    unread: 3,
  },
  {
    title: "Erivale kings",
    image: require("../../Images/DashImages/profile.png"),
    unread: 10,
  }
];
export default class RoundDetails2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showPostOption: false,
      user: '',
      show: false,
      switchValue: true,
      visibleModal: false,
      starCount: 4,
    }
    this.openDialog(true);
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })

  };

  handlePress(i) {
    alert(i)
  }
  onShowPostOption = (show) => {
    this.setState({
      showPostOption: show
    })
  }
  onShow = () => {
    if (this.state.show == false) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }

  }
  _showModal = () => this.setState({ visibleModal: true })

  _hideModal = () => this.setState({ visibleModal: false })

  MEMBERS_AREA_MARKET_PLACE_DRIVER = () => {
    //By Harshit
    Actions[MEMBERS_AREA_MARKET_PLACE_DRIVER]()
  };
  CALCULATOR = () => {
    //By Harshit
    Actions[CALCULATOR]()
  };
  ADDYOUROWNPIN = () => {
    //By Harshit
    _hideModal = () => this.setState({ visibleModal: false })
    Actions[ADDYOUROWNPIN]()
  };

  openDialog(show) {
    this.setState({ showDialog: show })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >

          <View>
            <View style={{ marginTop: 20, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity
                style={{ position: 'absolute', left: 15, }}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>

              <Text style={{ backgroundColor: 'transparent', fontWeight: 'bold', color: "#fff", fontSize: 18, position: 'absolute', }}>
                Round Details</Text>

              <View
                style={{ position: 'absolute', right: 15, }}>

                <Text style={{ backgroundColor: 'transparent', fontWeight: 'bold', color: "#fff", fontSize: 18, }}>
                  Done</Text>
              </View>
            </View>

            <ScrollView style={{ height: window.height - 140, }}>
              <View>

                <View style={{ marginRight: 10, marginLeft: 10, marginTop: 45, width: width, flexDirection: "row", alignItems: 'center', }}>
                  <View>
                    <Image style={{ width: 80, height: 80, borderRadius: 40 }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>

                  <View>
                    <Text style={{ backgroundColor: 'transparent', fontWeight: 'bold', color: "#fff", fontSize: 16, }}>
                      Sept 18,2017</Text>
                    <Text style={{ backgroundColor: 'transparent', fontWeight: 'bold', color: "#fff", fontSize: 16, }}>
                      Erinvale Golf Club</Text>
                    <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 14, }}>
                      Cape Town, South Africa</Text>
                  </View>

                  <View style={{ position: 'absolute', right: 15, }}>
                    <Image style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', }}
                      source={require('../../Images/DashImages/cloud.png')} >
                      <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 13, marginTop: 20, marginRight: 22 }}>
                        15</Text>
                    </Image>
                  </View>
                </View>

                <View style={{ marginTop: 10, height: 50, backgroundColor: '#000', width: width, flexDirection: "row", alignItems: 'center', }}>
                  <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 24, height: 24, }}
                      source={require('../../Images/DashImages/marker.png')} />
                    <TouchableOpacity onPress={this._showModal}>
                      <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 14, }}>
                        Highlights</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      starColor={'#BBAA64'}
                    />
                    <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 14, }}>
                      Write review</Text>
                  </View>
                </View>
                <Modal isVisible={this.state.visibleModal} style={styles.bottomModal}>
                  <View style={styles.modalContent}>
                    <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                      <TouchableOpacity
                        style={{ position: 'absolute', left: 15, }}>
                        <Text style={{ fontWeight: 'bold', color: "skyblue", fontSize: 15, }}>
                          Cancel</Text>
                      </TouchableOpacity>
                      <View style={{ position: 'absolute', right: 15, backgroundColor: 'skyblue', width: 80, height: 30, borderRadius: 20 }}>
                        <TouchableOpacity onPress={this._hideModal}>
                          <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 15, margin: 5, marginLeft: 15, width: 50 }}> Save </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ height: 2, backgroundColor: "lightgrey", }}></View>

                    <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                      <TouchableOpacity
                        style={{ position: 'absolute', left: "30%", }}>
                        <Text style={{ fontSize: 16 }}> Yellow</Text>
                      </TouchableOpacity>
                      <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")} />
                      <View
                        style={{ position: 'absolute', right: "15%", }}>
                        <Text style={{ marginTop: 10, marginLeft: 40 }}> hole in one</Text>
                      </View>
                    </View>
                    <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                      <TouchableOpacity
                        style={{ position: 'absolute', left: "30%", }}>
                        <Text style={{ fontSize: 16 }}> Green </Text>
                      </TouchableOpacity>
                      <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")} />
                      <View
                        style={{ position: 'absolute', right: "15%", }}>
                        <Text style={{ marginTop: 10, marginLeft: 40 }}> Course Played</Text>
                      </View>
                    </View>
                    <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                      <TouchableOpacity
                        style={{ position: 'absolute', left: "30%", }}>
                        <Text style={{ fontSize: 16 }}>blue </Text>
                      </TouchableOpacity>
                      <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")} />
                      <View
                        style={{ position: 'absolute', right: "15%", }}>
                        <Text style={{ marginTop: 10, marginLeft: 40 }}> Course Record</Text>
                      </View>
                    </View>
                    <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                      <TouchableOpacity
                        style={{ position: 'absolute', left: "30%", }}>
                        <Text style={{ fontSize: 16 }}> Custom</Text>
                      </TouchableOpacity>
                      <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")} />

                      <View
                        style={{ position: 'absolute', right: "15%", }}>
                        <TouchableOpacity onPress={this.ADDYOUROWNPIN}>
                          <Text style={{ marginTop: 10, marginLeft: 40 }}> + add your own </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <View style={{ marginTop: 15, width: width, flexDirection: "row", alignItems: 'center', }}>
                  <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 16, }}>
                      Playing partners</Text>
                  </View>

                  <View style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', flexDirection: "row", }}>
                    <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 16, }}>
                      Make public</Text>
                    <Image style={{ width: 24, height: 24, }}
                      source={require('../../Images/DashImages/chevron-down.png')} />
                  </View>
                </View>

                <View style={{
                  marginLeft: 10, marginRight: 10, marginTop: 15,
                  backgroundColor: 'transparent', borderRadius: 10, flexDirection: "row",
                  alignItems: 'center',
                }}>
                  <View style={{ marginLeft: 5,marginRight:10, justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 65, height: 65, borderRadius: 65, }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>
                  <View style={{ marginRight:10,justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 65, height: 65, borderRadius: 65, }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>
                  <View style={{marginRight:10, justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 65, height: 65, borderRadius: 65, }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>
                </View>


                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  
                }}>
                  

                  <View style={{ flexDirection: 'row', }}>
                    
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Cart</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>Caddy</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.MultiButton}>
                        <Text style={{ color: '#000', textAlign: 'center', margin: 10 }}>18 holes</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              
                </View>



                <View style={{ height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                  <View
                    style={{ position: 'absolute', left: 15, }}>

                    <Text style={{ backgroundColor: 'transparent', color: "#fff", fontSize: 16, }}>
                      Caddy used</Text>
                  </View>

                </View>

                <View style={{
                  marginLeft: 10, marginRight: 10, marginTop: 15,
                  backgroundColor: 'transparent', borderRadius: 10, flexDirection: "row",
                  alignItems: 'center',
                }}>
                  <View style={{ marginLeft: 5,marginRight:10, justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 65, height: 65, borderRadius: 65, }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>
                  <View style={{ marginRight:10,justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={{ width: 65, height: 65, borderRadius: 65, }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </View>
                </View>

                <View>
                  <Text style={{ backgroundColor: 'transparent', marginTop: 10, marginLeft: 15, color: '#fff', fontSize: 18, position: 'absolute', }}>
                    Media</Text>
                </View>

                <View style={{
                  marginLeft: 15, marginRight: 15, marginTop: 40,
                  backgroundColor: '#fff', borderRadius: 10,
                  alignItems: 'center',
                }}>

                  <View style={{
                    marginLeft: 8, marginRight: 8, alignItems: 'center',
                    justifyContent: 'space-between', flexDirection: "row",
                  }}>

                    <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                      <Image
                        source={cardPic}
                        resizeMode="contain"
                        style={{ height: 195, width: 195, borderRadius: 5 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                      <Image
                        source={cardPic}
                        resizeMode="contain"
                        style={{ height: 195, width: 195, borderRadius: 5 }}
                      />
                    </TouchableOpacity>

                  </View>
                  <View style={{
                    marginLeft: 8, marginRight: 8, alignItems: 'center',
                    justifyContent: 'space-between', flexDirection: "row",
                  }}>

                    <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                      <Image
                        source={cardPic}
                        resizeMode="contain"
                        style={{ height: 195, width: 195, borderRadius: 5 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 195, width: 195, borderRadius: 5 }}  >
                      <Image
                        source={cardPic}
                        resizeMode="contain"
                        style={{ height: 195, width: 195, borderRadius: 5 }}
                      />
                    </TouchableOpacity>

                  </View>

                </View>



                <View style={{ marginLeft: 15, }}>
                  <Text style={{ backgroundColor: 'transparent', marginTop: 10, color: '#fff', fontSize: 18, position: 'absolute', }}>
                    Round description</Text>
                </View>
                <View style={{ marginTop: 40 }}>

                  <TextInput style={styles.input}
                    placeholder={'Add description'}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor='#000'
                    underlineColorAndroid='transparent' />
                </View>

                <View style={{ marginLeft: 15, }}>
                  <Text style={{ backgroundColor: 'transparent', marginTop: 10, color: '#fff', fontSize: 18, position: 'absolute', }}>
                    Personal notes</Text>
                </View>
                <View style={{ marginTop: 40 }}>

                  <TextInput style={styles.input}
                    placeholder={'Write something (Only you can see this)'}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor='#000'
                    underlineColorAndroid='transparent' />
                </View>

                <View style={{ backgroundColor: 'transparent', marginTop: 20, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                <View
                    style={{ backgroundColor: 'transparent', }}>
                   
                      <Image style={{width:60,height:60,borderRadius:30}}
                       source={require('../../Images/DashImages/profile.png')} />
                   
                  </View>
                  
                  <TouchableOpacity>
                     <View style={{borderBottomRightRadius:20,borderTopRightRadius:20,borderTopLeftRadius:10
                      ,backgroundColor:'#fff',width:250,height:45,marginRight:10 }}>
                     </View>
                  </TouchableOpacity>

                </View>
                <View style={{ backgroundColor: 'transparent', marginTop: 20, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                <View
                    style={{ backgroundColor: 'transparent', }}>
                   
                      <Image style={{width:60,height:60,borderRadius:30}}
                       source={require('../../Images/DashImages/profile.png')} />
                   
                  </View>
                  
                  <TouchableOpacity>
                     <View style={{borderBottomRightRadius:20,borderTopRightRadius:20,borderTopLeftRadius:10
                      ,backgroundColor:'#fff',width:250,height:45,marginRight:10 }}>
                     </View>
                  </TouchableOpacity>

                </View>
                <View style={{ backgroundColor: 'transparent', marginTop: 20, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity>
                     <View style={{borderBottomLeftRadius:20,borderTopLeftRadius:20,borderTopRightRadius:10
                      ,backgroundColor:'#fff',width:250,height:45,marginRight:10 }}>
                     </View>
                  </TouchableOpacity>

                  <View
                    style={{ backgroundColor: 'transparent', position: 'absolute', right: 14, }}>
                   
                      <Image style={{width:60,height:60,borderRadius:30}}
                       source={require('../../Images/DashImages/profile.png')} />
                   
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
    borderRadius: 8,
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
    backgroundColor: '#F6F6F6',
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
    backgroundColor: '#BBAA64',

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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    borderRadius: 50,
    margin: 5
  },
}