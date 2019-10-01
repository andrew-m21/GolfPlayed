import React, { Component } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  TouchableHighlight,
  Dimensions 
} from "react-native";
import { Actions } from "react-native-router-flux";
import SimpleInputContainer from "../Component/InputContainer/SimpleInputContainer";
import Modal from 'react-native-modal'
import { ColorPicker, toHsv } from 'react-native-color-picker'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class PlusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
       color: toHsv('red') 
      }
      this.onColorChange = this.onColorChange.bind(this)  
  }
  onColorChange(color) {
    this.setState({ color })
  }
  _showModal = () => this.setState({ visibleModal: true })
  
    _hideModal = () => this.setState({ visibleModal: false })

  

  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop:10,flexDirection:'row',height:50,width:'100%',alignContent:'center',justifyContent:'center'}}>
      <Text style={{textAlign:'center',position: 'absolute', fontSize:15,fontWeight:'bold',margin:5,color:'white'}}>
        Add your own pin
        </Text>
        <Image style={{alignSelf:'flex-end',position: 'absolute', right:10,height:30,width:30 ,margin:10}} source={require("../../Images/DashImages/buttons/redpin.png")}/>
      </View>
      <View style={styles.button}>
          <TouchableOpacity onPress={this._hideModal}>
            <Text style={{fontWeight: 'bold', color: "black", fontSize: 15}}> Custom </Text>
          </TouchableOpacity>
      </View>
      <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity
          style={{ position: 'absolute', left: 20, }}>
          <Text style={{fontSize:16,color:'white'}}>Broke 70 </Text>
        </TouchableOpacity>
        <Image style={styles.rightArrow1} source={require("../../Images/DashImages/buttons/redpin.png")}/>
        <View
          style={{  }}>
          <Text style={{marginTop:10,marginLeft:40}}> Course Record</Text>
        </View>
      </View>
      <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity
          style={{ position: 'absolute', left: 20,  }}>
          <Text style={{fontSize:16,color:'white'}}> Broke 80</Text>
        </TouchableOpacity>
        <Image style={styles.rightArrow1} source={require("../../Images/DashImages/buttons/redpin.png")}/>
      </View>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.visibleModal} style={styles.bottomModal}>
          <View style={styles.modalContent}>
            <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity
                  style={{ position: 'absolute', left: 15, }}>
                  <Text style={{ fontWeight: 'bold', color: "skyblue", fontSize: 15, }}>
                  Cancel</Text>
              </TouchableOpacity>
              <View style={{  position: 'absolute', right: 15,backgroundColor:'skyblue' ,width:80,height:30,borderRadius:20}}>
                  <TouchableOpacity onPress={this._hideModal}>
                    <Text style={{fontWeight: 'bold', color: "#fff", fontSize: 15,margin:5,marginLeft:15,width:50}}> Save </Text>
                  </TouchableOpacity>
              </View>
              </View>
              <View style={{ height: 2, backgroundColor: "lightgrey", }}></View>
              
              <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity
                  style={{ position: 'absolute', left: "30%", }}>
                  <Text style={{fontSize:16}}> Yellow</Text>
                </TouchableOpacity>
                <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                <View
                  style={{  position: 'absolute', right: "15%", }}>
                  <Text style={{marginTop:10,marginLeft:40}}> hole in one</Text>
                </View>
              </View>
                <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity
                    style={{ position: 'absolute', left: "30%", }}>
                    <Text style={{fontSize:16}}> Green </Text>
                  </TouchableOpacity>
                  <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                  <View
                    style={{  position: 'absolute', right: "15%", }}>
                    <Text style={{marginTop:10,marginLeft:40}}> Course Played</Text>
                  </View>
                </View>
                <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity
                    style={{ position: 'absolute', left: "30%", }}>
                    <Text style={{fontSize:16}}>blue </Text>
                  </TouchableOpacity>
                  <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                  <View
                    style={{  position: 'absolute', right: "15%", }}>
                    <Text style={{marginTop:10,marginLeft:40}}> Course Record</Text>
                  </View>
                </View>
                <View style={{ height: 45,width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity
                    style={{ position: 'absolute', left: "30%", }}>
                    <Text style={{fontSize:16}}> Custom</Text>
                  </TouchableOpacity>
                  <Image style={styles.rightArrow} source={require("../../Images/DashImages/buttons/redpin.png")}/>
                  <View
                    style={{  position: 'absolute', right: "15%", }}>
                    <Text style={{marginTop:10,marginLeft:40}}> + add your own </Text>
                  </View>
                </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = {
  container: {
    height:'100%',
    backgroundColor:'black',
    
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
   height:300
  },
  modalInnerContent: {
    flexDirection:'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  rightArrow:{
    marginTop:10,
    width: 20,
    height: 20,
    position: 'absolute',
  },
  rightArrow1:{
    marginTop:10,
    width: 20,
    height: 20,
    position: 'absolute',
    right:20
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: width-40,
    borderRadius: 50,
    margin: 20, 
    height:40
  }
};