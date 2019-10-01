
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
import BuddiesTab from './Tabs/BuddiesTab';
import PendingTab from './Tabs/PendingTab';
import InviteTab from './Tabs/InviteTab';

export default class BuddiesScreen extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: 'buddies'
    }
  }

  render() {
    return (
      <Image style={styles.container} source={require('../../Images/tut1_bg.png')}>

        <Text style={styles.title}>Buddies</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => Actions.pop()}>
          <Image style={styles.closeImage} source={require("../../Images/DashImages/buttons/close.png")}/>
        </TouchableOpacity>

        <View>
          <TextInput  secureTextEntry={this.props.secureTextEntry} placeholder={"Search"}
            placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid={'#bbaa64'} style={{color: "#fff"}} />  

          <TouchableOpacity style={{position: "absolute", right: 5, top: 17,}}>
            <Image style={{resizeMode: "contain", width: 15, height: 15,}} source={require('../../Images/AuthImages/clearBtn.png')} />
          </TouchableOpacity>  
        </View>

        <View style={styles.tabs}>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Buddies" id="buddies" isSelected={this.state.selectedTab == "buddies"}/>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Pending" id="pending" isSelected={this.state.selectedTab == "pending"}/>
          <Tab style={[styles.tab, styles.startTab]} onTabPress={this.onSelectTab.bind(this)} title="Invite" id="invite" isSelected={this.state.selectedTab == "invite"}/>
        </View>

        <BuddiesTab onTabPress={this.onSelectTab.bind(this)} title="Buddies" id="buddies" isSelected={this.state.selectedTab == "buddies"}/>
        <PendingTab onTabPress={this.onSelectTab.bind(this)} title="Pending" id="pending" isSelected={this.state.selectedTab == "pending"}/>
        <InviteTab onTabPress={this.onSelectTab.bind(this)} title="Invite" id="invite" isSelected={this.state.selectedTab == "invite"}/>
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
    right: 25,
    top: 40,
  },
  closeImage: {
    width: 20,
    height: 20
  },
  title: {
      backgroundColor:'transparent',
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