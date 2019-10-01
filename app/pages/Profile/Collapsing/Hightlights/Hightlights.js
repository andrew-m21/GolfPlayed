
import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Hightlights extends Component{
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: 'one'
    }
  }
  render(){
    
    return (
      <View >
      {this.props.isSelected && <View style={[styles.container, {paddingTop: this.props.padding}]}>
        
      </View>}
      </View>
    )
  }

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }
  
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "100%",
      paddingBottom: 0,
  },
  tabs:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
});