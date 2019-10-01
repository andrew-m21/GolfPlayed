// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const FeedbackToolbar = (props) => {
//By Dmitry 
  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.pop()} style={styles.buttonContainer}>
            <Image source={require('../../Images/DashImages/barItem/menu_black.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <Text style={styles.name}>Feedback</Text>
    </View>
  );
}
export default FeedbackToolbar;

const styles = {
  container: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 36,
    width: '100%',
    flexDirection :'row',
    alignItems:'center',
  },
  buttonContainer:{
    position:'absolute',
    left: 20,
    top: 37
  },
  backButton:{
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  name:{
      color: 'black',
      fontSize: 18,
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold'
  }
} 
