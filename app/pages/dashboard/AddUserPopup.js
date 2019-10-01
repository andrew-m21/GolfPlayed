import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ActionModal from '../Component/ModalMenu/ActionModal.js'
 
const options = [ 
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  },
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  },
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  },
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  },
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  },
  {
    title: '{LikeUserName}', 
    image: require('../../Images/DashImages/profile.png')
  }]
 
class AddUserPopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <ActionModal modalVisible={this.props.visible} onCancel={() => this.props.onCancel(false)} >
          <View style={styles.buttonGroup} >
            {
              options.map((item, index) => (
                  <View style={styles.button}>
                    <View style={styles.leftSide}>
                      <Image style={styles.icon} source={item.image}/>
                      <Text style={styles.text}> {item.title} </Text>
                    </View>
                    <TouchableOpacity>
                      <Image style={styles.icon} source={require("../../Images/DashImages/plusButton.png")}/>
                    </TouchableOpacity>
                  </View>
                )
              )
            }
          </View>
        </ActionModal>
      </View>
    )
  }
}
export default AddUserPopup

const styles = {
  buttonGroup: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 20
  },
  icon: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: 30,
    height: 30
  }
}
