// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js';

export default class FilterTabs extends React.Component{

  constructor(props)
  {
    super(props);
   if(props.active == "first")
    {
      this.state = { first: {backgroundColor: '#7f7f7f'}, 
              second: {backgroundColor: 'white'},third:{backgroundColor: 'white'},
              index: 0};
    }
    else if(props.active == "second")
    {
      this.state = { first: { backgroundColor: 'white'},
                    second: {backgroundColor: '#7f7f7f'},third:{backgroundColor: 'white'},
                    index: 1} ;
    }
    else
    {

      this.state = { first: { backgroundColor: 'white'},
                    third: {backgroundColor: '#7f7f7f'},second:{backgroundColor: 'white'},
                    index: 2} ;
    }

  }

  render() {

    let handleToUpdate = this.props.handleToUpdate;
    
    return ( 
<View>
      <View style={[styles.container, this.props.style]}>

        <TouchableOpacity onPress={() => handleToUpdate(0)}>
          <View style={[styles.leftButton, this.props.first]}>
            <Text style={styles.text}>Filter</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.gap}></View>
        <TouchableOpacity onPress={() => handleToUpdate(1)}>
          <View style={[styles.center, this.props.second]}>
            <Text style={styles.text}>Board</Text>
          </View>
        </TouchableOpacity>
    

 <View style={styles.gap}></View>
        <TouchableOpacity onPress={() => handleToUpdate(2)}>
          <View style={[styles.rightButton, this.props.third]}>
            <Text style={styles.text}>Map</Text>
          </View>
        </TouchableOpacity>

    </View>
                    
    </View>
    );
  }
}

const {
  CHAT_SCREEN,
  NEW_CHAT_SCREEN,
  NEW_CHAT_GROUP_SCREEN
} = RouterScene;

let Window = Dimensions.get('window');

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Window.width / 2) - 65,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
        padding: 5,
    },
    rightButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Window.width / 2) - 65,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
        padding: 5
    },
     center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Window.width / 2) - 65,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'black',
        padding: 5
    },
    
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 15,
        backgroundColor: 'transparent'
    },
    gap:{
      width: 4,
    }
} 
