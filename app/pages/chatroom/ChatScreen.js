// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image, 
  TouchableOpacity,
  Alert,
  LayoutAnimation,
  ToastAndroid
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import NewOptionPopup from './NewOptionPopup.js';
import FirstScreen from './FirstScreen.js';
import GroupChatScreen from './GroupChatScreen.js';
import TopToolbar from '../Component/Toolbars/TopToolbar.js';

let FIRSTSCREEN_INDEX = 0;
let GROUPCHATSCREEN_INDEX = 1;

export default class ChatScreen extends React.Component {
  
   constructor(props) {
    super(props)
    let handleToUpdate = this.handleToUpdate.bind(this);
    this.state = {
      currentChatScreenIndex : FIRSTSCREEN_INDEX,
      topToolBarShow: true,
      newOption: false
    };
  }

  onSwipeUp(gestureState) {
    if (this.state.topToolBarShow) {
      this.showTopToolBar(false);
    }
  }

  onSwipeDown(gestureState) {
    if (this.state.topToolBarShow == false) {
      this.showTopToolBar(true);
    }
  }

  showTopToolBar = (show) => {
    this.setState({
      topToolBarShow: show
    })
  }

  onSwipe(gestureName, gestureState, fromToolBar) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
      this.onSwipeUp(gestureState);
      break;
      case SWIPE_DOWN:
      this.onSwipeDown(gestureState);
      break;
    }
  }

  handleToUpdate(index)
  {
    this.setState({
      currentChatScreenIndex: index
    })
  }

  render() {
    const config = {
      velocityThreshold: 0,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.container}>
        <TopToolbar show={this.state.topToolBarShow} />
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state, false)}
          config={config} >
            {this.renderScreen()}
        </GestureRecognizer>
      </View>
    )
  }

  onShowNewOption = (show) => {
    this.setState({
      newOption: show
    })
  }

  renderScreen() {
    let handleToUpdate = this.handleToUpdate;
    switch(this.state.currentChatScreenIndex) {
      case FIRSTSCREEN_INDEX:
        return ( 
          <View>
            <NewOptionPopup visible={this.state.newOption} onCancel={this.onShowNewOption}/>
            <FirstScreen handleToUpdate={handleToUpdate.bind(this)} showNewOptions={this.onShowNewOption} />
          </View> );
      case GROUPCHATSCREEN_INDEX:
        return ( 
          <View>
            <NewOptionPopup visible={this.state.newOption} onCancel={this.onShowNewOption}/>
            <GroupChatScreen handleToUpdate={handleToUpdate.bind(this)} showNewOptions={this.onShowNewOption}/>
          </View> );
      default:
        return null;
    }
  }
}


const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}
