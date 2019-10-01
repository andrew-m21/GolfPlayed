import React, { Component } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ListView,Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const matchPic = require("../../../Images/DashImages//profile.png");

const datas = [
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    },
    {
        match: "1",
        matchPic: matchPic,
        time: "08:00",
        timePic: matchPic,
        tee: "1",
        players1: "T.Georgiou",
        players2: "A.Georgiou",
        players3: "M.Van der westhuizen",
        players4: "M.De Souza",
    }
];

export default class RoundThree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: ''
    }
  }

  onSelectTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return (

      <View >
      {this.props.isSelected && <View style={styles.container}>
       
        <Image style={{ height: height, width: width }}
          source={require("../../../Images/tut1_bg.png")}>
          <View style={styles.container}>

            <ScrollView>
              <View style={styles.mainView}>
               
                <View style={{ marginTop: 5,height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>
                <View style={{ justifyContent: 'space-between', marginTop: 10, flexDirection: 'row', alignItems: "center", marginLeft: 15, marginRight: 15, }}>

                  <Text style={{ marginRight: 20, color: "#fff", fontSize: 18, }}>Match</Text>

                  <Text style={{ marginRight: 20, color: "#fff", fontSize: 18, }}>Time</Text>

                  <Text style={{ marginRight: 20, color: "#fff", fontSize: 18, }}>Tee</Text>

                  <Text style={{ marginRight: 20, color: "#fff", fontSize: 18, }}>Players</Text>

                </View>
                <View style={{ marginTop: 8, height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>

                <ListView
                  enableEmptySections={true}
                  dataSource={ds.cloneWithRows(datas)}
                  renderRow={(rowData) =>

                    <View style={{ justifyContent: 'space-between', marginTop: 10, flexDirection: 'row', marginLeft: 15, marginRight: 15, }}>

                      <View style={{ alignItems: "center", width: 50 }}>
                        <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.match}</Text>
                        <Image style={{ marginTop: 8, height: 50, width: 50, borderRadius: 50 }}
                          source={rowData.matchPic} />
                      </View>

                      <View style={{ alignItems: "center", width: 70 }}>
                        <Text style={{ marginTop: 5, color: "#fff", marginLeft: 10, fontSize: 18, }}>{rowData.time}</Text>
                        <Image style={{ marginTop: 8, height: 50, width: 50, borderRadius: 50 }}
                          source={rowData.timePic} />
                      </View>

                      <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.tee}</Text>

                      <View style={{ width: 100 }}>
                        <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.players1}</Text>
                        <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.players2}</Text>
                        <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.players3}</Text>
                        <Text style={{ marginTop: 5, color: "#fff", fontSize: 18, }}>{rowData.players4}</Text>
                      </View>
                    </View>} />
                <View style={{ height: 2, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>

              </View>
            </ScrollView>
          </View>
        </Image>
        </View>}
    </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: window.height + 100
  },
  mainView: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  leftbuttonwhite: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    width: 30,
    height: 30
  },
  inputWrapper: {
    marginTop: 40
  },
  input: {
    backgroundColor: '#F6F6F6',
    width: width - 40,
    height: 45,
    marginHorizontal: 20,
    paddingLeft: 18,
    borderRadius: 5,
    color: '#000',
  },
  buttonGroup: {
    margin: 10
  },
  active: {
    backgroundColor: '#bbaa64',
  },
  normal: {
    backgroundColor: '#fff'
  },

  tabs: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

});