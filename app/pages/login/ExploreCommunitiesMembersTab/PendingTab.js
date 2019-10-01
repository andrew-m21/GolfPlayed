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


export default class PendingTab extends Component{
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: ''
    }
  }
  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }
  
  render(){
    
    return (
      <View >
        {this.props.isSelected && <View style={styles.container}>
          
        </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
      width: "100%",
      height: "100%",
  },

});