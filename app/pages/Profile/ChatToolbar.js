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
import RouterScene from '../../Constant/constant.js';

const {
  MEMBERS_AREA_INBOX
} = RouterScene;

const ChatToolbar = (props) => {
  
//By Dmitry 
  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
  };
  
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions[MEMBERS_AREA_INBOX]()}>
            <Image source={require('../../Images/DashImages/buttons/leftbutton_white.png')} style={styles.leftbuttonwhite}/>
        </TouchableOpacity>
        <View style={styles.info}>
            <Text style={styles.name}>ClubName</Text>
            <Text style={styles.last1}>Admin</Text>
            <Text style={styles.last2}>Somerset west - cape Town</Text>
        </View>
        <TouchableOpacity onPress={() => this.onShowPostOption(true)}>
            <Image source={require('../../Images/Connect/more.png')} style={styles.add}/>
        </TouchableOpacity>
    </View>
  );
}
export default ChatToolbar;

const styles = {
  container: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
    paddingTop: 26,
    width: '100%',
    flexDirection :'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  add:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  profile:{
      width: 40,
      height: 40,
      marginLeft: 20,
  },
  info:{
      justifyContent:'center',
      alignItems:'center',   
      flex:1,
      marginLeft: 10,
  },
  name:{
      color: '#fff',
      fontSize: 18,
  },
  last1:{
      color: '#eee',
      fontSize: 14, 
      marginTop:10
  },
  last2:{
    color: '#eee',
    fontSize: 14,

  } 
} 
