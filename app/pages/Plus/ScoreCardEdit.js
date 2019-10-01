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

var CustomActionSheet=require('react-native-custom-action-sheet')
const options = [
  {
    title: 'Replace',
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Save to device',
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Share',
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },
  {
    title: 'Delete',
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },]

const {

    MAIN_CONTENT,
  AUTHENTICATION,
  LOG_IN,
  ROOT_SCENE,
  SIGN_UP,
  FORGET_PASSWORD,
  INTRO_SLIDES,
  DASH_BOARD,
  OPEN_SCREEN
} = RouterScene;


export default class ScoreCardEdit extends React.Component {

  constructor(props) {
    super(props);

  }
  OPEN_SCREEN = () => {
    Actions[OPEN_SCREEN]()
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
              <TouchableOpacity onPress={this.OPEN_SCREEN}
                style={{ position: 'absolute', left: 5, }}>
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

            <ScrollView style={{ backgroundColor: 'transparent', height: height }}>
              <View style={{ backgroundColor: 'transparent', }}>


                <View style={{height:200,
                  marginTop: 35,
                  borderRadius: 10, backgroundColor: 'transparent',
                }}>
                <Image style={styles.imageUpload} source={require('../../Images/DashImages/dashimg.png')} />
                </View>

                <View style={{ marginTop: 20,}}>
                  <Text style={{ color: "#fff",textAlign:'center', fontSize: 18, }}>
                  Stats</Text>
                </View>

                <View style={{
                  marginTop: 20,
                  borderRadius: 10, backgroundColor: '#fff',
                }}>

                  <View style={styles.rowTop}>
                    <View style={{ width: 45, height: 45, backgroundColor: '#BBAA65', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          Hole</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#DBD3B0', alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          1</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#DBD3B0', alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          2</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#DBD3B0', alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          3</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#DBD3B0', alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          4</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#BBAA65', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 10, }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          IN</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#000", }}></View>

                  <View style={styles.row}>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#000", }}></View>
                  <View style={styles.row}>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#000", }}></View>
                  <View style={styles.row}>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#000", }}></View>
                  <View style={styles.row}>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                      <TouchableOpacity style={{ backgroundColor: '#BBAA65', alignItems: 'center' }}>
                        <Image source={require('../../Images/DashImages/closeButton.png')} style={styles.buttons} />
                        <Text style={{ color: "#FFF", fontSize: 15, }}>
                          Phone</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#000", }}></View>
                  <View style={styles.rowBottom}>
                    <View style={{ width: 45, height: 45, backgroundColor: '#BBAA65', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 20, }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          Putts</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          1</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          2</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          1</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          2</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: '#BBAA65', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, }}>
                      <TouchableOpacity>
                        <Text style={{ color: "#000", fontSize: 15, }}>
                          6</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>

                {/* <View>
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
                </View> */}

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
    width: width,
    height: height,
  },
  buttons: {
    width: 20,
    height: 20,
  },
  row: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rowTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#DBD3B0',
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rowBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'transparent',
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: "center"
  },
  imageUpload: {
    borderRadius: 10,
    height: 200
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