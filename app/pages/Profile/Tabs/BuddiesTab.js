
import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    }
];

const suggestedListData = [
    {
        name: "Michael Xandria",
        friends: 273,
        profile: require("../../../Images/DashImages/profile.png")
    },
    {
        name: "James Bond",
        friends: 250,
        profile: require("../../../Images/DashImages/profile.png")
    },
    {
        name: "Brad Willson",
        friends: 82,
        profile: require("../../../Images/DashImages/profile.png")
    },
    
];

export default class BuddiesTab extends Component{
  
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      listDataSource: ds.cloneWithRows(listData),
      suggestedListData: ds.cloneWithRows(suggestedListData)
    };
  }

  render(){
    
    return (
      <View style={{marginTop: 20,}}>
        {this.props.isSelected && <View>
            
            <Text style={styles.suggestedText}>Suggested buddies</Text>
            <TouchableOpacity style={{position: "absolute", right: 0,}}><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>

            
            <View style={{flexDirection: "row", marginTop: 25}} >
              <ListView horizontal={true} style={{marginTop: 10,}} showsHorizontalScrollIndicator={false}  
              dataSource={this.state.suggestedListData} renderRow={(rowData, sectionID, rowID) => (this.renderSuggestedListItem(rowData))} />
          
            </View>

            <Text style={[styles.suggestedText, {position: "relative", marginTop: 10}]}>Existing buddies</Text>
            <ListView showsVerticalScrollIndicator={false} 
              dataSource={this.state.listDataSource} renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData))} />
          </View>
        }
      </View>
    )
  }

  renderListItem(rowData) {
      return(
          <View>
          <TouchableOpacity style={styles.listItem}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
            </View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/buttons/rightbutton.png")}/></View>
          </TouchableOpacity>
        </View>
      )
  }

  renderSuggestedListItem(rowData) {
      return(
          <View style={styles.card}>
          <Image style={styles.profile} source={rowData.profile}/>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.friends}>{rowData.friends + " mutual friends"}</Text>
          <View style={{flexDirection:"row", justifyContent: "center", marginTop: 10,}}>
            <TouchableOpacity><Image source={require('../../../Images/DashImages/profile.png')} style={styles.buttonImage}/></TouchableOpacity>
            <TouchableOpacity><Image source={require('../../../Images/DashImages/profile.png')} style={[styles.buttonImage, {marginLeft: 10}]}/></TouchableOpacity>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  suggestedText:{
      backgroundColor:'transparent',
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },
  seeAllText:{
      backgroundColor:'transparent',
    color: "rgba(255,255,255, 0.6)",
  },
  card:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: 160,
    marginRight: 10,
  },
  profile:{
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },
  name:{
      backgroundColor:'transparent',
    alignSelf: "center",
    fontSize: 17,
    marginTop: 10,
  },
  friends:{
    alignSelf: "center",
    fontSize: 12,
    color: "#bbaa64"
  },
  buttonImage:{
    width: 40,
    height: 40,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingBottom: 8,
    paddingTop: 8,
  },
  listItemTitle: {
      backgroundColor:'transparent',
    fontSize: 20,
    color: '#fff',
  },
  listItemSubtitle: {
      backgroundColor:'transparent',
    fontSize: 12,
    color: '#aaa'
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
  rightArrow:{
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  }

});