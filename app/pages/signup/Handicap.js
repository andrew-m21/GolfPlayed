import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,Button } from 'react-native'

var CustomActionSheet=require('react-native-custom-action-sheet')
 
const options = [ 
  {
    title: 'New Chat', 
    image: require('../../Images/DashImages/popupIcon/hidePost.png')
  },
  {
    title: 'New Group', 
    image: require('../../Images/DashImages/popupIcon/repost.png')
  },
  {
    title: 'Settings', 
    image: require('../../Images/DashImages/popupIcon/turnOnNotification.png')
  }]
 
class Handicap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomActionSheet modalVisible={this.props.visible} onCancel={() => this.props.onCancel(false)} >
          <View style={styles.container}>
            <Text style={styles.title}>Handicap</Text>
            <Text style={styles.hadicap}>8.2</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonNormal}><Text style={styles.text}>Pro</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonNormal}><Text style={styles.text}>No Handicap</Text></TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonNormal}><Text style={styles.text}>C</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonNormal}><Text style={styles.text}>+/-</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonNormal}><Text style={styles.text}>.</Text></TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>7</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>9</Text></TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>6</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>4</Text></TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>3</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>1</Text></TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonWhite}><Text style={styles.text}>0</Text></TouchableOpacity >
              <TouchableOpacity style={styles.buttonGolden}><Text style={styles.text}>Done</Text></TouchableOpacity>
            </View>

          </View> 
        </CustomActionSheet>
      </View>
    )
  }
}
export default Handicap

const styles = {
  container:{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    overflow: 'hidden'
  },
  title: {
    color: '#999',
    fontSize: 20,
  },
  hadicap:{
    fontSize: 50,
    color: '#333'
  },
  buttonContainer:{
    flexDirection: 'row',
  },
  buttonNormal: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#ccc',
    color: '#333',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    color: '#333',
  },
  buttonWhite: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#eee',
    color: '#333',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    color: '#333',
  },
  buttonGolden: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#bbaa64',
    color: '#333',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    color: '#333',
  },
  text: {
    color: 'black',
    fontSize: 18
  },
  icon: {
    margin: 20,
    width: 30,
    height: 30
  }
}
