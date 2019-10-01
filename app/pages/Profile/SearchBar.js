// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';
import InputContainer from "../Component/InputContainer/InputContainer"

const SearchBar = (props) => {
  //By Dmitry 
  if (props.show == false) {
    return null;
  }
  if (props.hasButton == true) {
    return (
      <View style={[styles.container, {flexDirection: 'row'}, props.style]} >
        <View style={styles.inputContainer} >
          <InputContainer 
            secureTextEntry={false}
            placeholder={props.placeholder}
            placeholderTextColor="#7f7f7f"
            value={props.value}
            onChangeText={props.onChangeText}
            returnKeyType={'next'}
            inlineImageLeft="search"
            inlineImagePadding={10} />
        </View>
        <View style={{flexDirection: 'column', justifyContent:'center'}}>
          <TouchableOpacity onPress={props.onClickHandler}>
            <Text style={styles.button} > Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    } else {
      return (
        <View style={[styles.container, props.style]} >
          <InputContainer 
            secureTextEntry={false}
            placeholder={props.placeholder}
            placeholderTextColor="#7f7f7f"
            value={props.value}
            onChangeText={props.onChangeText}
            returnKeyType={'next'}
            inlineImageLeft="search"
            inlineImagePadding={10} />
        </View>
      );
    }
  }
  export default SearchBar

const styles = {
  container: {
    left: 0,
    right: 0,
    padding:5,
    backgroundColor: '#000000A0',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  inputContainer: {
    width: '80%',
    paddingRight: 10,
  },
  button: {
    fontSize: 20,
    color: 'blue',
  }
} 
