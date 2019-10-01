
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
    
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const profileImage = require('../../../Images/DashImages/profile.png');
const dashImage = require('../../../Images/DashImages/dashimg.png');
const fullName = "{{Invite guests}}";
const homeClub = "{{homeClub}}";
const profileheading = "{{Make my profile public}}";
const profileSubheading = "{{A private profile is only visible to GolfPlayed buddies}}";
const profileSettings = "{{profile Settings}}";
const GolfSettings = "{{Golf Settings}}";
const rightbutton = require("../../../Images/DashImages/buttons/rightbutton.png");
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const userPic = require("../../../Images/DashImages/profile.png");
const favPic = require("../../../Images/DashImages/arrowDownButton.png");

const userData = [
  {
      pos: 5,
      userPic: userPic,
      userName: "{{MyName}}",
      total: 13,
      favPic: favPic,
  },
  
];
const favData = [
  {
      pos: 5,
      userPic: userPic,
      userName: "{{MyName}}",
      total: 5,
      favPic: favPic,
  },
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 4,
      favPic: favPic,
  },
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 5,
      favPic: favPic,
  },
  
];
const datas = [
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 3,
      favPic: favPic,
  },
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 10,
      favPic: favPic,
  },
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 5,
      favPic: favPic,
  },
  {
      pos: "T2",
      userPic: userPic,
      userName: "{{UserName}}",
      total: 6,
      favPic: favPic,
  },
  {
      pos: "T2",
      userPic: userPic,
      userName: "{{UserName}}",
      total: 3,
      favPic: favPic,
  },
  {
      pos: 4,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 6,
      favPic: favPic,
  },
  {
      pos: 5,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 2,
      favPic: favPic,
  },
  {
      pos: 6,
      userPic: userPic,
      userName: "{{UserName}}",
      total: 8,
      favPic: favPic,
  }
];

export default class Saved extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
    };
  }
  render(){
    let style = this.props.isSelected && styles.selectedTab || styles.normalTab;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
	    return (
        <View style={{paddingTop: 20}}>
          {this.props.isSelected && <View >
            <View style={{ marginRight:15, alignItems: 'center', flexDirection: "row", }}>
                                <View >
                                    <TextInput style={{
                                         color: '#000', width: 250,borderRadius: 5,
                                        height: 45, marginHorizontal: 20, paddingLeft: 18, 
                                    }}
                                        placeholder={"Search"}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={{ position: 'absolute', right: 0, }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={require("../../../Images/closeButton.png")}
                                            resizeMode="contain"
                                            resizeMethod="scale"
                                            style={{ height: 23, width: 23, borderRadius: 23 }} />
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                            <View style={{ marginLeft: 10, marginRight: 10, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                           

                            <View style={{marginTop:10,alignItems:"center"}}>
                            <Text style={{ marginTop:5,marginRight: 10, fontSize: 22,color:"#BCAB64" }}>Title</Text>
                            </View>

                            <View style={{ marginTop:10,flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15, }}>
                                        
                                        <View style={{marginRight: 10,alignItems:"center"}}>
                                        <Text style={{ fontSize: 18, }}>POS</Text>
                                        </View>
                                        

                                        <Text style={{ marginLeft: 10, fontSize: 18, }}>COUNTRY</Text>


                                        <Text style={{ position: 'absolute', right: 50,
                                         fontSize: 18, }}>TOTAL</Text>
                                        <View style={{ position: 'absolute', right: 0, }}>
                                        <Text style={{fontSize: 18, }}>FAV</Text>
                                        </View>
                                       
                                    </View>

                            <ListView
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(userData)}
                                renderRow={(rowData) =>

                                    <View style={{ marginTop:10,flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15, }}>
                                        
                                        <View style={{marginRight: 10,alignItems:"center"}}>
                                        <Text style={{ fontSize: 18, }}>{rowData.pos}</Text>
                                        </View>
                                        <Image
                                            style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={rowData.userPic} />

                                        <Text style={{ marginLeft: 10, fontSize: 18, }}>{rowData.userName}</Text>


                                        <Text style={{ position: 'absolute', right: 55,
                                        marginLeft: 5, fontSize: 18, }}>{rowData.total}</Text>
                                        <TouchableOpacity style={{ position: 'absolute', right: 0, }}>
                                            <Image
                                                style={{ height: 30, width: 30, borderRadius: 30 }}
                                                source={rowData.favPic} />
                                        </TouchableOpacity>
                                        <View style={{ marginRight: 10, marginLeft: 20, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                    </View>

                                } />

                                <View style={{alignItems:"center"}}>
                                <Text style={{ marginTop:5,marginRight: 10, fontSize: 18,color:"#BCAB64" }}>All Countries</Text>
                                </View>

                            <ListView
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(favData)}
                                renderRow={(rowData) =>

                                    <View style={{ marginTop:10,flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15, }}>
                                        
                                        <View style={{marginRight: 10,alignItems:"center"}}>
                                        <Text style={{ fontSize: 18, }}>{rowData.pos}</Text>
                                        </View>
                                        <Image
                                            style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={rowData.userPic} />

                                        <Text style={{ marginLeft: 10, fontSize: 18, }}>{rowData.userName}</Text>


                                        <Text style={{ position: 'absolute', right: 55,
                                         fontSize: 18, }}>{rowData.total}</Text>
                                        <TouchableOpacity style={{ position: 'absolute', right: 0, }}>
                                            <Image
                                                style={{ height: 30, width: 30, borderRadius: 30 }}
                                                source={rowData.favPic} />
                                        </TouchableOpacity>
                                        <View style={{ marginRight: 10, marginLeft: 20, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                    </View>

                                } />

                                <View style={{alignItems:"center"}}>
                                <Text style={{ marginTop:5,marginRight: 10, fontSize: 18,color:"#BCAB64" }}>All Countries</Text>
                                </View>
                           
                            <ListView
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(datas)}
                                renderRow={(rowData) =>

                                    <View style={{ marginTop:5,flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15}}>
                                        
                                        <Text style={{ marginRight: 10, fontSize: 18, }}>{rowData.pos}</Text>
                                        <Image
                                            style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={rowData.userPic} />

                                        <Text style={{ marginLeft: 10, fontSize: 18, }}>{rowData.userName}</Text>


                                        <Text style={{ position: 'absolute', right: 55,
                                         fontSize: 18, }}>{rowData.total}</Text>
                                        <TouchableOpacity style={{ position: 'absolute', right: 0, }}>
                                            <Image
                                                style={{ height: 30, width: 30, borderRadius: 30 }}
                                                source={rowData.favPic} />
                                        </TouchableOpacity>
                                        <View style={{ marginRight: 10, marginLeft: 20, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                                    </View>

                                } />
          </View>}
        </View>
	    )
	}

  renderListItem(rowData) {
      return(
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}> {rowData.title} </Text>
          {/* <TouchableOpacity><Image style={styles.button} source={require("../../../../Images/DashImages/buttons/rightbutton.png")}/></TouchableOpacity>
          <TouchableOpacity><Image style={styles.button} source={require("../../../../Images/DashImages/buttons/rightbutton.png")}/></TouchableOpacity> */}
        
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
      height:window.height
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