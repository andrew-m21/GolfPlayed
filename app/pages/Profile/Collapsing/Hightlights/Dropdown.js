

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

export default class Dropdown extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    
      let style = this.props.isSelected && styles.selectedTab || styles.normalTab;
      
      return (
        <View style={{paddingBottom: 30}}>
          <TouchableOpacity onPress={() => this.props.onTabPress(this.props.id)} style={styles.tab}>
              <Text style={styles.title}>{this.props.title}</Text>
              {this.props.isSelected && <Image style={styles.indicator} source={require("../../../../Images/DashImages/buttons/rightbutton.png")}/>}
              {!this.props.isSelected && <Image style={styles.indicator} source={require("../../../../Images/DashImages/buttons/leftbutton_white.png")}/>}
          </TouchableOpacity>
          <View style={styles.line}></View>
          {this.props.isSelected && <View >
          
          </View>}
        </View>
      )
  }

}

const styles = StyleSheet.create({
  
    tab:
    {
      backgroundColor: 'rgba(0,0,0, 0.8)',
      width: '100%',
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
    },
    title:
    {
      color: "#bbaa64",
      backgroundColor: 'transparent',
      marginLeft: 10,
    },
    indicator:
    {
      width: 15,
      height: 15,
      resizeMode: 'contain',
      position: 'absolute',
      right: 10,
    },
    line:
    {
      height: 1,
      backgroundColor: "#bbaa64",
    },
    listItem:
    {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      paddingLeft: 30,
    },
    listItemTitle:
    {
      backgroundColor: "transparent",
      color: "#fff",
      fontSize: 15,
      flex: 1,
    },
    button:
    {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginLeft: 10,
    }

});