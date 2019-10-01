import React, {Component, PropTypes} from 'react';
import {
  TextInput,
  View,Image,TouchableOpacity
} from 'react-native';



export default class InputContainer extends Component {

   constructor(props) {
    super(props)


  }



  render() {

  return (
  <View style={styles.inputContainer}>
        <TextInput
            style={styles.greyFont}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            inlineImageLeft={this.props.inlineImageLeft}
            inlineImagePadding={this.props.inlineImagePadding}
            underlineColorAndroid={'#ffffff'}
            clearButtonMode={'while-editing'}
        />
    </View>

  );
  }
}

const styles = {
  inputContainer: {
    paddingLeft:15,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 30,
    backgroundColor: '#ffffff',
    borderRadius: 40
  },
  greyFont: {
    color: '#7f7f7f',
    height:30,
    marginRight:20,
    marginLeft:20,
    padding:0
  },
    closeIcon: {
        width: 20,
        height: 20,
    },
    closeButton: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
        top: 10,
    },
}
