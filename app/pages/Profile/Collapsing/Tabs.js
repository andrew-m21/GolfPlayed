

import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Tab extends Component{

	render(){
    
	    let style = this.props.isSelected && styles.selectedTab || styles.normalTab;
	    
	    return (
	    	<TouchableOpacity onPress={() => this.props.onTabPress(this.props.id)} style={[style, styles.tab, this.props.style]}>
	      		
	       		<Text style={styles.title}>{this.props.title}</Text>

	       		<View style={[styles.line, style]}></View>
	      		
	      	</TouchableOpacity>
	    )
	}
}

const styles = StyleSheet.create({
	
  	tab:{
  		height: 40,
    	alignItems: 'center',
    	justifyContent: 'center',
    	backgroundColor: 'transparent',
  	},
  	title:{
  		alignSelf: 'center',
  		color: "#fff"
  	},
  	selectedTab:{
  		backgroundColor: "#bbaa64",
  	},
  	normalTab:{
  		backgroundColor: "#000",
  	},
  	line:{
  		position: 'absolute',
  		height: 4,
  		bottom: 0,
  		width: 100,
  	}

});