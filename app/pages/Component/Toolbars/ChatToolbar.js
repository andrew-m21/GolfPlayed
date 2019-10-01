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

const ChatToolbar = (props) => {
//By Dmitry 
  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.pop()}>
            <Image source={require('../../../Images/DashImages/buttons/leftbutton_white.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <Image source={require('../../../Images/DashImages/profile.png')} style={styles.profile}/>
        <View style={styles.info}>
            <Text style={styles.name}>Andrew Gorgiou</Text>
            <Text style={styles.last}>Last seen September 7, 10:22</Text>
        </View>
    </View>
  );
}
export default ChatToolbar;

const styles = {
  container: {
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 26,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  backButton:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  profile:{
      width: 40,
      height: 40,
      marginLeft: 20,
  },
  info:
  {
      flex:1,
      marginLeft: 10,
  },
  name:{
      color: '#fff',
      fontSize: 18,
  },
  last:{
      color: '#eee',
      fontSize: 12,
  }
} 
