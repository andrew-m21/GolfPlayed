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
import RouterScene from '../../Constant/constant';

const {
  ADDYOUROWNPIN,
  } = RouterScene;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class ColorPickerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       color: toHsv('red') 
      }
      this.onColorChange = this.onColorChange.bind(this)  
  }
  onColorChange(color) {
    this.setState({ color })
  }
  ADDYOUROWNPIN() {
    Actions[ADDYOUROWNPIN]()
  }

  

  render() {
    return (
      <View style={styles.container}>
       <View style={{marginTop:20,flexDirection:'row',height:50,width:'100%',alignContent:'center',justifyContent:'center'}}>
            <Text style={{textAlign:'center',position: 'absolute', fontSize:15,fontWeight:'bold',margin:5,color:'white'}}>
              Add your own pin
            </Text>
          <TouchableOpacity onPress={this.ADDYOUROWNPIN}
              style={{ position: 'absolute', right: 15,marginTop:20 }}>
              <Image style={styles.close} source={require("../../Images/DashImages/buttons/close.png")} />
          </TouchableOpacity>
          </View>
       <View style={styles.button}>
              <TouchableOpacity onPress={this.COLORPICKER}>
                <Text style={{fontWeight: 'bold', color: "black", fontSize: 15}}> Custom </Text>
              </TouchableOpacity>
          </View>
     <View style={{alignContent:'center',justifyContent:'center',height:60}}>
        <Image style={{alignSelf:'center',position: 'absolute',height:30,width:30 ,margin:10,backgroundColor:'white'}} source={require("../../Images/DashImages/buttons/redpin.png")}/>
      </View>
        <View style={{padding: 15, backgroundColor: '#212021',height:350,width:'100%'}}>
        <ColorPicker
          onColorSelected={color => alert(`Color selected: ${color}`)}
          style={{height:300}}
        />
      </View>
       
      <TouchableOpacity>
                  <View style={[styles.bottomButton]}>
                    <Text style={{
                      textAlign: 'center',
                      textAlignVertical: 'center', color: 'black',
                      fontSize: 15, backgroundColor: 'transparent'
                    }}>Done</Text>
                  </View>
                </TouchableOpacity>
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
  bottomButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9A9A9C',
    width: width - 40,
    height: 35,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom:20
  },
};