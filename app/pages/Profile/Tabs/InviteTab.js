
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

export default class InviteTab extends Component{
  
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
        {this.props.isSelected && <View>
            
            <View style={styles.line}></View>
            
            <TouchableOpacity>
              <View style={styles.row}>
                <Image style={styles.image} source={require("../../../Images/AuthImages/FbIn.png")}/>
                <View style={styles.texts}>
                  <Text style={styles.title}>Connect Facebook</Text>
                  <Text style={styles.subtitle}>Find your Facebook friends on GolfPlayed</Text>
                </View>
                <Image style={styles.icon} source={require("../../../Images/Connect/plus.png")}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginBottom: 10,}}>
              <View style={styles.row}>
                <Image style={styles.image} source={require("../../../Images/AuthImages/googleIn.png")}/>
                <View style={styles.texts}>
                  <Text style={styles.title}>Sync contacts</Text>
                  <Text style={styles.subtitle}>Find your contacts on GolfPlayed</Text>
                </View>
                <Image style={styles.icon} source={require("../../../Images/Connect/plus.png")}/>
              </View>
            </TouchableOpacity>


            <View style={styles.line}></View>

            <Text style={styles.suggestedText}>Suggested buddies</Text>

            <ListView horizontal={true} style={{marginTop: 10,}} showsHorizontalScrollIndicator={false}  
              dataSource={this.state.listDataSource} renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData))} />
          

          </View>
        }
      </View>
    );
  }

  renderListItem(rowData) {
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
  line:{
    width: '100%',
    height: 0.5,
    backgroundColor: "#bbaa64",
    marginTop: 10 
  },
  row:{
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  image:{
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  texts:{
    flex: 1,
  },
  title:{
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
      backgroundColor:'transparent',
  },
  subtitle:{
    color: '#fff',
    marginLeft: 10,
    fontSize: 12,
      backgroundColor:'transparent',
  },
  icon:{
    resizeMode:'contain',
    width: 20,
    height: 20,
  },
  suggestedText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
      backgroundColor:'transparent',
  },
  card:{
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 5,
    padding: 10,
  },
  profile: {
    resizeMode: 'contain',
    width: 90,
    height: 90,
    alignSelf: "center"
  },
  name:{
    alignSelf: "center",
    fontSize: 17,
    marginTop: 10,
  },
  friends:{
      backgroundColor:'transparent',
    alignSelf: "center",
    fontSize: 12,
    color: "#bbaa64"
  },
  buttonImage:{
    width: 40,
    height: 40,
    resizeMode: "contain"
  },

});