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
  ToastAndroid, Dimensions, ScrollView, Slider,Picker
} from 'react-native';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const backgroundimage = require('../../Images/tut1_bg.png');

const {
  DASH_BOARD,
  OPEN_SCREEN
} = RouterScene;

export default class HighlightAchieved extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      animating: false,
      distance: 130,

      user: '',
      show:false,
      DistanceUser:'',
      ShowDistance:false,
    }
  }
  getVal(val) {
    console.warn(val);
  }

  componentWillUnmount() {
    this.setState({ animating: false });

  }
  componentDidMount() {
    this.setState({ animating: false });
    //SplashScreen.hide();

  }
  updateUser=(user)=> {
    this.setState({ user:user})
 }
 onShow = () => {
  if(this.state.show==false){
    this.setState({
      show:true
    })
  }else{
    this.setState({
      show:false
    })
  }
  
}
updateDistanceUser=(DistanceUser)=> {
  this.setState({ DistanceUser:DistanceUser})
}
onShowDistance = () => {
if(this.state.ShowDistance==false){
  this.setState({
    ShowDistance:true
  })
}else{
  this.setState({
    ShowDistance:false
  })
}

}


  handleUsernameChange(text) {
    this.setState({ username: text });
  }
  handlePasswordChange(text) {
    this.setState({ password: text });
  }
  handleSubmit() {


  }



  OPEN_SCREEN = () => {
    Actions[OPEN_SCREEN]()
  }

  setSignup = () => {
    Actions[SIGN_UP]()
  }
  logIn = () => {
    //By Dmitry
    Actions[MAIN_CONTENT]()
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
          <View style={{ backgroundColor: 'transparent', }}>
            <View style={{ backgroundColor: 'transparent', marginTop: 20, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity onPress={this.OPEN_SCREEN}
                style={{ position: 'absolute', left: 15, }}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>

              <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, position: 'absolute', }}>
                Highlight achieved!</Text>

              <View
                style={{ backgroundColor: 'transparent', position: 'absolute', right: 15, }}>

                <Image style={styles.leftbuttonwhite} source={require('../../Images/DashImages/closeButton.png')} />
              </View>
            </View>

            <ScrollView >
              <View style={{ backgroundColor: 'transparent',marginBottom:120 ,height:'100%'}}>

                <View style={{ marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#93854F", fontSize: 18, }}>
                    CoureseName</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    CoureseCity CoureseCountry</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    Hole-in-one</Text>
                  <Image style={{ marginTop: 10, width: 80, height: 80, }} source={require('../../Images/DashImages/clubIcon.png')} />
                </View>

                <View style={{ marginTop: 15, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    Congratulations on your Hole-in-one</Text>
                  <Text style={{ color: "#93854F", fontSize: 18, }}>
                    UserName</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    Tell us more about your achievement</Text>
                  <Text style={{ marginTop: 10, color: "#fff", fontSize: 18, }}>
                    Select hole</Text>

                </View>
                <View style={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  marginTop: 15, width: width,
                  justifyContent: 'space-between'
                }}>
                  <Text style={{ color: "#fff", fontSize: 18, }}>1</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>2</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>3</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>4</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>5</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>6</Text>
                  <Text style={{ color: "#fff", fontSize: 18, }}>7</Text>
                </View>

                <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "#93854F", }}></View>
                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width, flexDirection: "row",
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <TouchableOpacity onPress={this.onShow}>
                    <View style={[styles.leftButton, this.props.first]}>
                      <Text style={styles.text}>Club used</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.gap}></View>

                  <View style={styles.gap}></View>
                  <TouchableOpacity onPress={this.onShowDistance}>
                    <View style={[styles.rightButton, this.props.second]}>
                      <Text style={styles.text}>Distance</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {this.state.ShowDistance && <View  style={{}}>
                <View style={{
                  backgroundColor: '#fff', borderRadius: 10,
                  marginTop: 15, width: width, height: 200,
                }}>
                  <View style={{ marginTop: 10, height: 35, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
          
                    <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18, position: 'absolute', }}>
                    Distance</Text>
                    <View
                      style={{ position: 'absolute', right: 15, }}>

                      <Text style={{ fontWeight: 'bold', color: "#BBAA64", fontSize: 18, }}>
                      Yards</Text>
                    </View>
                  </View>
                 
                  <View style={{
                    backgroundColor: 'transparent',
                    marginTop: 15, width: width, marginRight: 10,
                    marginLeft: 10
                  }}>
                    <Slider
                      style={{ color: '#BBAA64' }}
                      step={1}
                      minimumValue={0}
                      maximumValue={300}
                      value={this.state.distance}
                      onValueChange={val => this.setState({ distance: val })}
                      onSlidingComplete={val => this.getVal(val)}
                    />
                    <Text style={{ fontSize: 20, textAlign: 'center', margin: 10, color: '#000' }}>
                      {this.state.distance}
                    </Text>
                  </View>

                  <View style={{
                    backgroundColor: 'transparent',
                    marginTop: 15, width: width, flexDirection: "row",
                    justifyContent: 'center', alignItems: 'center',
                  }}>
                    <TouchableOpacity >
                      <View style={[styles.leftButton, this.props.first]}>
                        <Text style={styles.text}>Cancel</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.gap}></View>

                    <View style={styles.gap}></View>
                    <TouchableOpacity>
                      <View style={[styles.rightButton, this.props.second]}>
                        <Text style={styles.text}>Done</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>}
                {this.state.show && <View  style={{}}>
              <Picker selectedValue = {this.state.user} 
                onValueChange = {this.updateUser}
                >
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "india" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "India" value = "India" />
                <Picker.Item  color='white' label = "india" value = "India" />
                
              </Picker>
              </View>}

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
                    }}>Done</Text>
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
    borderBottomColor: 'transparent',
    backgroundColor: '#3B3A3A',
    height:height
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9A9A9C',
    width: width - 40,
    height: 35,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom:20
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
  }
}