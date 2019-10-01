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
import { ColorPicker, toHsv } from 'react-native-color-picker';
import RouterScene from '../../Constant/constant';

const {
  COLORPICKERPAGE,
  OPEN_SCREEN
  } = RouterScene;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AddYourOwnPin extends Component {
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

  COLORPICKERPAGE = () => {
    //By harshit
    _hideModal = () => this.setState({ visibleModal: false })
    Actions[COLORPICKERPAGE]()
  };
  OPEN_SCREEN() {
    Actions[OPEN_SCREEN]()
  }
  COLORPICKERPAGE() {
    Actions[COLORPICKERPAGE]()
  }
  
  render() {
    return (
      <View style={styles.container}>
          <View style={{marginTop:20,flexDirection:'row',height:50,width:'100%',alignContent:'center',justifyContent:'center'}}>
            <Text style={{textAlign:'center',position: 'absolute', fontSize:15,fontWeight:'bold',margin:5,color:'white'}}>
              Add your own pin
              </Text>
              <TouchableOpacity onPress={this.OPEN_SCREEN}
              style={{ position: 'absolute', right: 15,marginTop:20 }}>
              <Image style={styles.close} source={require("../../Images/DashImages/buttons/close.png")} />
          </TouchableOpacity>
          </View>
          <View style={styles.button}>
              <TouchableOpacity onPress={this.COLORPICKERPAGE}>
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
  },
  close: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
};