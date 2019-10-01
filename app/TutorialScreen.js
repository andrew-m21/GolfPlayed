import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  Dimensions,
  Navigator,
  AsyncStorage,
  Alert,
  ToastAndroid,
  NetInfo,
  NavigatorIOS,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Swiper from 'react-native-swiper';

import styles from './styles';
import defaultbutton from './button-default';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../app/Constant/constant';

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
    EXPLORE_SCREEN
} = RouterScene;

/** Mark :ButtonView container that is used to get getstarted and sigin functinality **/
class BottonView extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            navigation: null
        }
    }

    _onLogInActionClicked = () => {
        this.props.onButtonClicked();
    };

    render() {

        return (

              <View style={styles.opacityButtonContainer}>
                  <TouchableOpacity style={styles.opacityButtonWrap} onPress={this._onLogInActionClicked}>
                      <View style={styles.opacityButton}>
                          <Text style={{color: '#000'}}>Get started</Text>
                      </View>
                  </TouchableOpacity>

                  <View style = {{flex:1, flexDirection:'row',top:0,}}>
                    <Text style={{color:'white'}}>Already a member?</Text>
                    <TouchableOpacity onPress={this._onLogInActionClicked}>
                      <Text style={{color:'#BBAA64'}}> Sign in</Text>
                    </TouchableOpacity>
                  </View>

              </View>

          );
    }
}

/** Tutorial screen which is called as introslides in navigation panel of code **/
export default class TutorialScreen extends Component {
  constructor(props) {
    super(props);
  }
//changed
  handleScreen =  ()  => {
    Actions[LOG_IN]()
  };
//LOG_IN EXPLORE_SCREEN
  render() {

      return (
        <View style={styles.main_bg}>
          <Swiper contentContainerStyle={{flex:1}}
              showsButtons={false}
              autoplay={true}
              showsPagination= {false}
              activeDotColor = {'#BBAA64'}>
         <TutorialOne onButtonClicked={this.handleScreen}/>
         <TutorialTwo onButtonClicked={this.handleScreen}/>
         <TutorialThree onButtonClicked={this.handleScreen}/>
         <TutorialFour onButtonClicked={this.handleScreen}/>
        </Swiper>

        <BottonView onButtonClicked={this.handleScreen}/>
      </View>
    )
  }
}

/** BackGround Image of first scene **/
class BgImage extends Component {

    render() {
    return (<Image source={require('./Images/tut1_bg.png')}
                   style = {styles.main_bg}>
    {this.props.children}
      </Image>);
  }
}

/** Back Ground Image of Second secene **/
class BgImage1 extends Component {

    render() {
    return (<Image source={require('./Images/tut2_bg.png')}
                   style = {styles.main_bg}>
    {this.props.children}
      </Image>);
  }
}

/** BackGround Image of Third scene **/
class BgImage2 extends Component {

    render() {
    return (<Image source={require('./Images/tut3_bg.png')}
                   style = {styles.main_bg}>
    {this.props.children}
      </Image>);
  }
}

/** BackGround Image of fourth Scene **/
class BgImage3 extends Component {

    render() {
    return (<Image source={require('./Images/tut4_bg.png')}
                   style = {styles.main_bg}>
    {this.props.children}
      </Image>);
  }
}

/** Logo Image of first scene **/
class LogoImage extends Component {

    render() {
    return (
    <Image source={require('./Images/tut1_logo.png')}
           style = {styles.logo_container2}>
    {this.props.children}
      </Image>
    )
  }
}

/**LogoImage of Second Scene **/
class LogoImage1 extends Component {

    render() {
    return (
    <Image source={require('./Images/tut2_logo.png')}
           style = {styles.logo_container2}>
    {this.props.children}
      </Image>
    )
  }
}

/** LogoImage of Third Scene **/
class LogoImage2 extends Component {

    render() {

    return (
    <Image source={require('./Images/tut3_logo.png')}
           style = {styles.logo_container2}>
    {this.props.children}
      </Image>
    )
  }
}

/** Logo Image of fourth Scene **/
class LogoImage3 extends Component {

    render() {
    return (
    <Image source={require('./Images/tut4_logo.png')}
           style = {styles.logo_container2}>
    {this.props.children}
      </Image>
    )
  }
}
/** Logo Text of First Scene **/
class LogoText extends Component {

    render() {
    return (
    <Image source={require('./Images/tut1_text.png')}
           style = {styles.textContainerIS}>
    {this.props.children}
      </Image>
    )
  }
}
/** LogoText for Second Scene **/
class LogoText1 extends Component {

    render() {
    return (
    <Image source={require('./Images/tut2_text.png')}
           style = {styles.text_container}>
    {this.props.children}
      </Image>
    )
  }
}
/** LogoText for Third secene **/
class LogoText2 extends Component {

    render() {
    return (
    <Image source={require('./Images/tut3_text.png')}
           style = {styles.text_container}>
    {this.props.children}
      </Image>
    )
  }
}

/** Logo text for third scecene **/
class LogoText3 extends Component {

    render() {
    return (
    <Image source={require('./Images/tut4_text.png')}
           style = {styles.text_container}>
    {this.props.children}
      </Image>
    )
  }
}

/** Tutorial One scene  component **/
class TutorialOne extends Component {

    constructor(props) {
    super(props);
    this.state =  {
      navigation: null
    }
  }

  onButtonClicked = () => {
    this.props.onButtonClicked();
  };

  render() {
    return (
      <BgImage>
        <LogoImage/>
        <LogoText/>
        {/*<BottonView onButtonClicked={this.onButtonClicked}/>*/}
      </BgImage>
    )
  }
}

/** Tutorial Second Scene **/
class TutorialTwo extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      navigation: null
    }
  }

  onButtonClicked = () => {
    this.props.onButtonClicked();
  };

  render() {

      return (
      <BgImage1>
        <LogoImage1/>
        <LogoText1/>
        {/*<BottonView onButtonClicked={this.onButtonClicked}/>*/}
      </BgImage1>
    )
  }
}

/** Tutorial Scene third for component **/
class TutorialThree extends Component {

    constructor(props) {
    super(props);
    this.state =  {
      navigation: null
    }
  }

  onButtonClicked = () => {
    this.props.onButtonClicked();
  };

  render() {
    return (
      <BgImage2>
        <LogoImage2/>
        <LogoText2/>
        {/*<BottonView onButtonClicked={this.onButtonClicked}/>*/}
      </BgImage2>
    )
  }
}
/** Tutorial four Scene **/
class TutorialFour extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      navigation: null
    }
  }

  onButtonClicked = () => {
    this.props.onButtonClicked();
  };

  render() {
    return (
      <BgImage3>
        <LogoImage3/>
        <LogoText3/>
        {/*<BottonView onButtonClicked={this.onButtonClicked}/>*/}
      </BgImage3>
    )
  }
}
