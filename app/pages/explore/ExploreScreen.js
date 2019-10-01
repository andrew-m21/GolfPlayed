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
  ToastAndroid,
  ListView
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import TopToolbar from '../Component/Toolbars/TopToolbar.js';
import Explorer from './Explorer';

export default class ExploreScreen extends React.Component {
  
   constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      topToolBarShow: true,
      newOption: false,
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
    return(
     <Explorer/> 
    );
  }

  
  
}


const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
}
