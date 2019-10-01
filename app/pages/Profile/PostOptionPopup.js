import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

var CustomActionSheet=require('react-native-custom-action-sheet')
 
const options = [ 
  {
    title: 'Message', 
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'Share', 
    image: require('../../Images/DashImages/popupIcon/share_grey.png')
  },
  {
    title: 'Repost post', 
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },
  {
    title: 'Turn on notifictions', 
    image: require('../../Images/DashImages/popupIcon/turnOnNotification.png')
  },
  {
    title: 'Save game', 
    image: require('../../Images/DashImages/popupIcon/plusButton.png')
  }]
 
class PostOptionPopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <CustomActionSheet modalVisible={this.props.visible} onCancel={() => this.props.onCancel(false)} >
          <View style={styles.buttonGroup} >
            {
              options.map((item, index) => (
                  <TouchableOpacity style={styles.button}>
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
}
export default PostOptionPopup

const styles = {
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
