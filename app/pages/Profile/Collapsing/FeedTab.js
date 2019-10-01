
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
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png")
    },
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

export default class FeedTab extends Component{
  
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      listDataSource: ds.cloneWithRows(listData),
    };
  }

  render(){
    
    return (
      <View >
        {this.props.isSelected && <View style={{paddingTop: this.props.padding}}>
            
            <Text style={styles.suggestedText}>Sent (13)</Text>
            <TouchableOpacity style={{position: "absolute", right: 0,}}><Text style={styles.seeAllText}>Request (4)</Text></TouchableOpacity>

            <ListView style={{marginTop: 30,}} showsVerticalScrollIndicator={false} removeClippedSubviews={false} 
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
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/profile.png")}/></View>
            <View style={styles.badgeContainer}><Image style={styles.rightArrow} source={require("../../../Images/DashImages/profile.png")}/></View>
          </TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  suggestedText:{
    position: "absolute",
    color: "#bbaa64",
    fontWeight: "bold",
    fontSize: 15
  },
  seeAllText:{
    color: "#fff",
    fontSize: 15
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingBottom: 8,
    paddingTop: 8,
  },
  listItemTitle: {
    fontSize: 20,
    color: '#fff',
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
  rightArrow:{
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  }

});