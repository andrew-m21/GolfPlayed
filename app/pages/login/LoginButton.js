import React, {Component, PropTypes} from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import { Button } from 'react-native-material-design';


export default class LoginButton extends Component {
  
   constructor(props) {
    super(props)
   
    
  }
  render() {

  return (
  <View style={styles.login}>
    <Button 
      text={this.props.text} 
      value={this.props.value} 
      raised={this.props.raised} 
      onPress={this.props.handleSubmit} 
      overrides={this.props.overrides} 
    />
  </View>
      
  );
  }
}

const styles = {
  login:{
      marginTop: 10 
    }
  }
