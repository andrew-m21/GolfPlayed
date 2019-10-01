
import React, {Component} from 'react'
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {Actions} from 'react-native-router-flux';
import Tab from './Tabs/Tabs';
import WalletTab from './Tabs/WalletTab';
import PendingWalletTab from './Tabs/PendingWalletTab';
import RegisteredTab from './Tabs/RegisteredTab';

export default class Wallet extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: 'one'
    }
  }

  render() {
    return (
      <Image style={styles.container} source={require('../../Images/tut1_bg.png')}>
        <Text style={styles.title}>Wallet</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => Actions.pop()}>
            <Image style={styles.closeImage} source={require("../../Images/DashImages/buttons/leftbutton_white.png")}/>
          </TouchableOpacity>
        <View style={styles.tabs}>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Wallet" id="one" isSelected={this.state.selectedTab == "one"}/>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Pending(5)" id="two" isSelected={this.state.selectedTab == "two"}/>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Registered(12)" id="three" isSelected={this.state.selectedTab == "three"}/>
        </View>
        <WalletTab onTabPress={this.onSelectTab.bind(this)} title="Wallet" id="one" isSelected={this.state.selectedTab == "one"}/>
        <PendingWalletTab onTabPress={this.onSelectTab.bind(this)} title="Pending(5)" id="two" isSelected={this.state.selectedTab == "two"}/>
        <RegisteredTab onTabPress={this.onSelectTab.bind(this)} title="Registered(12)" id="three" isSelected={this.state.selectedTab == "three"}/>
      </Image>
    )
  }

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }
}

let windowSize = require('Dimensions').get('window');

const styles = StyleSheet.create({
  container: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: 30,
      paddingBottom: 0,
      paddingRight: 10,
      paddingLeft: 10,
  },
  closeButton: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 15,
    top: 40,
  },
  closeImage: {
    resizeMode: 'contain',
    width: 20,
    height: 20
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  tabs:{
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
  },
  
});