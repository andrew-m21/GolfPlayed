
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
import Tab from '../../Tabs/Tabs';
import Courses from './Courses';
import Experience from './Experience';

export default class BucketList extends Component{
  
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
        <View style={[styles.tabs, {paddingRight: 10, paddingLeft: 10,}]} >
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Courses" id="one" isSelected={this.state.selectedTab == "one"}/>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Experience" id="three" isSelected={this.state.selectedTab == "three"}/>
        </View>

        <Courses onTabPress={this.onSelectTab.bind(this)} title="Courses" id="one" isSelected={this.state.selectedTab == "one"}/>
        <Experience onTabPress={this.onSelectTab.bind(this)} title="Experience" id="three" isSelected={this.state.selectedTab == "three"}/>
        
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