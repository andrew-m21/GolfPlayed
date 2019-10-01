
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

export default class WalletTab extends Component{
  
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
            
            <View style={styles.row}>
              <View style={{flex: 1,}}>
                <Text style={styles.viewMBText}>View makerboard</Text>
                <TouchableOpacity><Text style={styles.how}>How makers work ></Text></TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.points}>
                <Text style={styles.pointsText}>165</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.line}></View>
            
            <Text style={styles.shareCodeText}>Share your invite code</Text>
            <TouchableOpacity style={styles.shareCode}>
              <Text style={styles.codeText}>userDcode</Text>
            </TouchableOpacity>

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
    backgroundColor: "#999",
    marginTop: 10 
  },
  row:{
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30, 
    alignItems: 'center',
  },
  viewMBText:{
    color: "#fff",
    fontSize: 15,
  },
  how:{
    marginTop: 10,
    color: "#bbaa64",
  },
  points:{
    width: 110,
    height: 30,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius:50,
  },
  pointsText: {
    color: "#000"
  },
  shareCodeText:{
    marginTop: 50,
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareCode:{
    marginTop: 10,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
  },
  codeText:{
    fontSize: 16,
    color: "#333"
  }

});