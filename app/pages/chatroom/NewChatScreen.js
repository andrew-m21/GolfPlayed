import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ListView, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import SimpleInputContainer from "../Component/InputContainer/SimpleInputContainer";

const listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png")
    }
]
export default class NewChatScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      listDataSource: ds.cloneWithRows(listData),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>New Chat</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => Actions.pop()}>
          <Image style={styles.closeImage} source={require("../../Images/DashImages/buttons/close.png")}/>
        </TouchableOpacity>
        <TextInput  secureTextEntry={this.props.secureTextEntry} placeholder={"Search"}
                placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid={'#bbaa64'} style={{color:"#fff"}} />   
           
        <ListView showsVerticalScrollIndicator={false} 
            removeClippedSubviews={false}
            dataSource={this.state.listDataSource} renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData))} />
      </View>
    );
  }

  renderListItem(rowData, rowId) {
    if(rowId == this.listData.length - 1)
    {
      return(
        <View style={[styles.listItem, styles.lastItemPadding]}>
          <Image style={styles.listItemImage} source={rowData.image} />
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}> {rowData.title} </Text>
            <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
          </View>
          <TouchableOpacity style={styles.badgeContainer}><Image style={styles.badgeImage} source={require("../../Images/DashImages/buttons/plus.png")} /></TouchableOpacity>
        </View>
      );  
    }
    else
    {
      return(
        <View style={styles.listItem}>
          <Image style={styles.listItemImage} source={rowData.image} />
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}> {rowData.title} </Text>
            <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
          </View>
          <TouchableOpacity style={styles.badgeContainer}><Image style={styles.badgeImage} source={require("../../Images/DashImages/buttons/plus.png")} /></TouchableOpacity>
        </View>
      );
    }
  }


  listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../Images/DashImages/profile.png"),
    }
  ];

}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#49143c',
    paddingTop: 30,
    paddingRight: 10,
    paddingLeft: 10,
  },
  closeButton: {
    position: "absolute",
    width: 20,
    height: 20,
    right: 25,
    top: 50,
  },
  closeImage: {
    width: 18,
    height: 18,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    height: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparent'
  },
  buttonGroup: {
    marginTop: 20,
  },
  active: {
    backgroundColor: '#bbaa64',
  },
  normal: {
    backgroundColor: 'white'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding:{
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 18,
    fontStyle: 'bold',
    color: '#fff'
  },
  listItemSubtitle: {
    fontSize: 12,
    color: '#bbaa64'
  },
  listItemImage: {
    width: 70,
    height: 70,
    resizeMode:'contain',
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5
  },
  badgeContainer:{
    justifyContent:'center',
  },
  badgeImage:{
    width: 25,
    height: 25,
  }
};
