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
  ToastAndroid, Dimensions, ScrollView, Slider, Picker, ListView
} from 'react-native';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
const backgroundimage = require('../../Images/tut1_bg.png');
const img = require('../../Images/DashImages/profile.png');

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

const datas = [
  {
    img: img,
    name: "John",
  },
  {
    img: img,
    name: "Finch",
  },

];

export default class VoiceNotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  OPEN_SCREEN = () => {
    Actions[OPEN_SCREEN]()
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#000000'}
        />
        <Image style={styles.coverImage} source={backgroundimage} >

          <View style={{ backgroundColor: 'transparent', }}>
            <View style={{ backgroundColor: 'transparent', marginTop: 20, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity onPress={this.OPEN_SCREEN}
                style={{ position: 'absolute', left: 15, }}>
                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
              </TouchableOpacity>

              <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, position: 'absolute', }}>
                Voice notes</Text>

            </View>

            <ScrollView style={{ backgroundColor: 'transparent', height: window.height }}>
              <View style={{ backgroundColor: 'transparent', }}>

                <View style={{
                  backgroundColor: 'transparent',
                  marginTop: 15, width: width,
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ color: "#fff", fontSize: 18, }}>
                    No voice notes added</Text>

                  <Text style={{ marginTop: 20, textAlign: 'center', color: "#fff", fontSize: 15, }}>
                    Press and hold the microphone to add voice notes to your round</Text>
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

                <ListView
                  enableEmptySections={true}
                  dataSource={ds.cloneWithRows(datas)}
                  renderRow={(rowData) =>
                    <View style={{ marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: '#F6F6F6', }}>
                      <View style={{ marginLeft: 0, marginRight: 0, backgroundColor: '#F6F6F6', alignItems: 'center', flexDirection: "row", }}>


                        <View style={{ marginRight: 20, alignItems: 'center', position: 'absolute', right: 0, }}>
                          <Image
                            style={{
                              width: 60, borderRadius: 30,
                              height: 60,
                            }}
                            source={rowData.img}
                          />
                          <Text style={{ margin: 8, marginLeft: 10, fontWeight: 'bold', color: "#fff", fontSize: 18, left: 0 }}>
                            {rowData.name}</Text>
                        </View>
                      </View>
                    </View>} />






                <View
                  style={styles.floatingButton
                    // position: 'absolute', right: 14,
                    // bottom: 0, alignItems: 'flex-end'
                  }>
                  <TouchableOpacity>
                    <Image style={{ width: 35, height: 35, borderRadius: 15 }}
                      source={require('../../Images/DashImages/profile.png')} />
                  </TouchableOpacity>
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
  floatingButton: {
    position: 'absolute',
    height: 50,
    bottom: 0,
    backgroundColor: "#fff"
  }
}