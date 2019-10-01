
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
    ListView,
    Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const window = Dimensions.get('window');

const listData = [
    {
        title: "state",
    },
    {
        title: "Country",
    },
    {
      title: "Category",
  },
];

export default class Filter extends Component{
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      selectedTab: '',
      listDataSource: ds.cloneWithRows(listData),
    };
  }

  render(){
    let style = this.props.isSelected && styles.selectedTab || styles.normalTab;
	    
	    return (
        <View style={{paddingTop: 20}}>
         {this.props.isSelected && <View >
  	    <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
              <View style={{ marginTop: 15, alignItems: 'center', flexDirection: "row", }}>
                  <Image
                      style={{ height: 60, width: 60, borderRadius: 60 }}
                      source={require("../../../Images/addperson.png")}
                  />
                  <View >
                      <TextInput style={{
                          backgroundColor: '#CCCCCC', color: '#000', width: 300,
                          height: 45, marginHorizontal: 20, paddingLeft: 18, borderTopRightRadius: 20,
                          borderBottomRightRadius: 20,
                      }}
                          placeholder={"Enter comments"}
                          secureTextEntry={this.props.secureTextEntry}
                          autoCorrect={this.props.autoCorrect}
                          autoCapitalize={this.props.autoCapitalize}
                          returnKeyType={this.props.returnKeyType}
                          placeholderTextColor='#000'
                          underlineColorAndroid='transparent' />
                  </View>

              </View>

              <View style={{ marginTop: 5, alignItems: 'center', flexDirection: "row", width: window.width }}>
                  <Image
                      style={{ height: 60, width: 60, borderRadius: 60 }}
                      source={require("../../../Images/addperson.png")}
                  />
                  <View>

                      <View style={{ flexDirection: 'row', width: "100%" }}>
                          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>CPT golf</Text>
                          <View style={{ position: 'absolute', right: 0, }}>
                              <Text style={{ fontSize: 15, marginRight: 40, color: "yellow" }}>3</Text>
                          </View>
                      </View>
                      <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                  </View>
              </View>
              <View style={{ marginTop:5, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 10, marginRight: 10 }}>

              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>CPT Cape Town, South Africa, South Africa South Africa</Text>
  
                  <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>CPT golf day</Text><Text style={{ fontSize: 14, }}>CPT golf day</Text>
                  </View>
              </View>

              <View style={{ marginTop:10,marginLeft: 10, marginRight: 10,flexDirection: 'row', justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14,  }}>Like</Text>  
              <Text style={{ fontSize: 14, }}>Comments</Text>
              <Text style={{ fontSize: 14, }}>Dislike</Text>
                  </View>

              <View style={{ marginTop: 5, alignItems: 'center', flexDirection: "row", width: window.width }}>
                  <Image
                      style={{ height: 60, width: 60, borderRadius: 60 }}
                      source={require("../../../Images/addperson.png")}
                  />
                  <View>

                  <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                  <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                      <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                      <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                  </View>
              </View>
              <View style={{ marginTop: 5, alignItems: 'center', flexDirection: "row", width: window.width }}>
                  <Image
                      style={{ height: 60, width: 60, borderRadius: 60 }}
                      source={require("../../../Images/addperson.png")}
                  />
                  <View>

                  <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                  <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                      <Text style={{ fontSize: 14, }}>Cape Town, South Africa, South Africa</Text>
                  </View>
              </View>
          </View>
          </View>}
        </View>
	    )
	}

  toggle()
  {
    if(this.props.isSelected)
    {
      this.props.onTabPress("");
    }
    else
    {
      this.props.onTabPress(this.props.id);
    }
  }
}

const styles = StyleSheet.create({
	
  	tab:
    {
      backgroundColor: 'rgba(0,0,0, 0.8)',
      width: '100%',
      height: 50,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      height:'40%'
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