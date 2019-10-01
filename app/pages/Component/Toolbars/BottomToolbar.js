// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js'

const {
  MAIN_CONTENT,
  AUTHENTICATION,
  LOG_IN,
  ROOT_SCENE,
  SIGN_UP,
  FORGET_PASSWORD,
  INTRO_SLIDES,

  DASH_BOARD,
  CHAT_SCREEN,
  EXPLORE_SCREEN,
  OPEN_SCREEN,
  PROFILE_SCREEN,
} = RouterScene;

let Window = Dimensions.get('window');

export default class BottomToolbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.toolbar}>   
          <View style={styles.group}> 
            <TouchableOpacity onPress={() => Actions[DASH_BOARD]()}>
                <Image style={styles.item} source={require('../../../Images/DashImages/barItem/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions[CHAT_SCREEN]()}>
                <Image style={styles.item} source={require('../../../Images/DashImages/barItem/connect.png')} />
            </TouchableOpacity>
          </View> 
          <View style={styles.group}> 
            <TouchableOpacity onPress={() => Actions[EXPLORE_SCREEN]()}>
                <Image style={styles.item} source={require('../../../Images/DashImages/barItem/explore.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions[PROFILE_SCREEN]()}>
                <Image style={styles.item} source={require('../../../Images/DashImages/barItem/me.png')} />
            </TouchableOpacity>
          </View> 
        </View>
        <View style={styles.openMenu}>
          <TouchableOpacity onPress={() => Actions[OPEN_SCREEN]()}>
              <Image style={styles.plus} source={require('../../../Images/DashImages/barItem/openMenu.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {

  },
  toolbar: {
    backgroundColor: 'black',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'space-between',
  },
  openMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 10,
    left: Window.width/2-30,
    backgroundColor: 'transparent'
  },
  plus: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  group: {
    paddingLeft:20,
    paddingRight:20,
    width: '40%',
    flexDirection :'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  }
} 
