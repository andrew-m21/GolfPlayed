// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Actions } from 'react-native-router-flux';

const TopToolbar = (props) => {
//By Dmitry 
  if (!props.show) {
    return null;
  }
  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
  };

  return (
    <GestureRecognizer
      onSwipeDown={props.onSwipeDown}
      config={config} >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.drawerOpen()}>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onSearch?(() => props.onSearch()):null}>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/numberOfCourse.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/notification.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.item} source={require('../../Images/DashImages/barItem/marketplaceMenu.png')} />
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
}
export default TopToolbar

const styles = {
  container: {
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20,
    height: 60,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  item: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  item1:{

  }
} 
