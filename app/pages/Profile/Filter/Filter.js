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

import FilterScreen from './FilterScreen.js';
import BoardScreen from './BoardScreen.js';
import TopToolbar from '../../Component/Toolbars/TopToolbar.js';

let FILTERSCREEN_INDEX = 0;
let BOARDSCREEN_INDEX = 1;

export default class Filter extends React.Component {
  
   constructor(props) {
    super(props)
    let handleToUpdate = this.handleToUpdate.bind(this);
    this.state = {
      currentChatScreenIndex : FILTERSCREEN_INDEX,
      topToolBarShow: false,
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
      this.showTopToolBar(false);
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

  

  renderScreen() {
    let handleToUpdate = this.handleToUpdate;
    switch(this.state.currentChatScreenIndex) {
      case FILTERSCREEN_INDEX:
        return ( 
          <View>
            <FilterScreen handleToUpdate={handleToUpdate.bind(this)} showNewOptions={this.onShowNewOption} />
          </View> );
      case BOARDSCREEN_INDEX:
        return ( 
          <View>
            <BoardScreen handleToUpdate={handleToUpdate.bind(this)} showNewOptions={this.onShowNewOption}/>
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
