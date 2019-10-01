
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
import PersonalInfo from './PersonalInfo';
import GolfingInfo from './GolfingInfo';

export default class Experience extends Component{
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: ''
    }
  }

  render(){
    
    return (
      <View >
        {this.props.isSelected && <View style={styles.container}>
          <PersonalInfo onTabPress={this.onSelectTab.bind(this)} title="Personal info" id="one" isSelected={this.state.selectedTab == "one"}/>
          <GolfingInfo onTabPress={this.onSelectTab.bind(this)} title="Golfing info" id="three" isSelected={this.state.selectedTab == "three"}/>
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
  },

});