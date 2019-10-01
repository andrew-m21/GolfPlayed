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
	    
	    let tabStyle = {};

	    if(this.props.title == "Round1")
	    {
	    	tabStyle = styles.startTab;
	    }
	    else if(this.props.title == "Round2")
	    {
	    	tabStyle = styles.middleTab;
	    }
	    else
	    {
	    	tabStyle = styles.endTab;
	    }

	    return (
	    	<TouchableOpacity onPress={() => this.props.onTabPress(this.props.id)} style={[style, styles.tab, tabStyle]}>
	      		
	       		<Text style={styles.title}>{this.props.title}</Text>
	      		
	      	</TouchableOpacity>
	    )
	}
}

const styles = StyleSheet.create({
	startTab:{
	    borderTopLeftRadius: 25,
	    borderBottomLeftRadius: 25,
  	},
  	middleTab:{
	    marginRight: 2,
	    marginLeft: 2,
  	},
  	endTab:{
	    borderTopRightRadius: 25,
	    borderBottomRightRadius: 25,
  	},
  	tab:{
    	flex: 1,
    	height: 30,
    	alignItems: 'center',
    	justifyContent: 'center'
  	},
  	title:{
  		alignSelf: 'center',
  		color: "#000"
  	},
  	selectedTab:{
  		backgroundColor: "#bbaa64",
  	},
  	normalTab:{
  		backgroundColor: "#fff",
  	}

});