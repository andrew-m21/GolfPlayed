import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js'

var CustomActionSheet=require('react-native-custom-action-sheet')
 
const options = [ 
  {
    title: 'New Chat', 
    image: require('../../Images/DashImages/popupIcon/hidePost.png'),
    number: 0
  },
  {
    title: 'New Group', 
    image: require('../../Images/DashImages/popupIcon/repost.png'),
    number: 1
  },
  {
    title: 'Settings', 
    image: require('../../Images/DashImages/popupIcon/turnOnNotification.png'),
    number: 2
  }]

const {
  NEW_CHAT_SCREEN,
  NEW_CHAT_GROUP_SCREEN
} = RouterScene;
 
class NewOptionPopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomActionSheet modalVisible={this.props.visible} onCancel={() => this.props.onCancel(false)} >
          <View style={styles.buttonGroup} >
            {
              options.map((item, index) => (
                  <TouchableOpacity style={styles.button} onPress={() => this.onClick(item.number)}>
                    <Image style={styles.icon} source={item.image}/>
                    <Text style={styles.text}> {item.title} </Text>
                  </TouchableOpacity>
                )
              )
            }
          </View>
        </CustomActionSheet>
      </View>
    )
  }

  onClick(number)
  {
    switch(number)
    {
      case 0:
        this.props.onCancel(false);
        Actions[NEW_CHAT_SCREEN]();
        break;
      case 1:
        this.props.onCancel(false);
        Actions[NEW_CHAT_GROUP_SCREEN]();
        break;
    }
    
  }

}
export default NewOptionPopup

const styles = {
  container:{
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  buttonGroup: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 20
  },
  icon: {
    margin: 20,
    width: 30,
    height: 30
  }
}
