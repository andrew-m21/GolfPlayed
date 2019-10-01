import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
  ListView, Switch,
  Dimensions, ScrollView,Picker
} from 'react-native';
import SimpleInputContainer from '../../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant';

const {

  ACCOUNT_DETAIL,
  MEMBERS_AREA,
  SETTINGS

} = RouterScene;

const leftbutton_white = require('../../../Images/DashImages/buttons/leftbutton_white.png');
const backgroundimage = require('../../../Images/tut1_bg.png');

export default class CommunityPrivacy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      falseSwitchIsOn: true,
      user: '',
    }
  }
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })

  };
  getInitialState() {
    return {
      trueSwitchIsOn: false,
      falseSwitchIsOn: true,
    };
  }
  MEMBERSAREA = () => {
    //By Harshit
    Actions[MEMBERS_AREA]()
  };
  ACCOUNT = () => {
    //By Harshit
    Actions[ACCOUNT_DETAIL]()
  };
  SETTINGS = () => {
    //By harshit
    Actions[SETTINGS]()
  };
  render() {
    let handleToUpdate = this.props.handleToUpdate;
    return (
      <View style={styles.container}>
        <Image style={styles.coverImage} source={backgroundimage} >
          <View style={{ justifyContent: 'center', alignContent: 'center', marginTop: 25, flexDirection: 'row', width: '100%' }}>
            <TouchableOpacity style={{ position: 'absolute', left: 10, marginTop: 5 }}
              onPress={() => Actions.pop()}>
              <Image style={{ height: 25, width: 25, }} source={leftbutton_white} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}> Community privacy</Text>
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'column', marginTop: 25, }}>
              <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-end', }}>
                <Text style={{ color: 'white', marginLeft: 30, marginTop: 5, fontWeight: 'bold' }}> Privacy </Text>
                <View style={{ flex: 1, alignSelf: 'flex-end', }}>
                  <Switch
                    onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                    style={{ flex: 1, alignSelf: 'flex-end', marginTop: 5, marginBottom: 10, marginTop: 5, marginRight: 20 }}
                    value={this.state.falseSwitchIsOn}
                    onTintColor='#BBAA64'
                    tintColor='#fffaf0'
                  />
                </View>
              </View>
              <Text style={{ color: 'grey', marginLeft: 35, marginTop: -5, width: window.width - 100, fontSize: 13 }}>Anyone can see the community, its members and their posts. </Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ color: 'white', marginLeft: 35, fontWeight: 'bold' }}> Closed</Text>
                <View style={{ flex: 1, alignSelf: 'flex-end', }}>
                  <Switch
                    onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                    style={{ flex: 1, alignSelf: 'flex-end', marginTop: 5, marginBottom: 10, marginTop: 5, marginRight: 20 }}
                    value={this.state.falseSwitchIsOn}
                    onTintColor='#BBAA64'
                    tintColor='#fffaf0'
                  />
                </View>
              </View>
              <Text style={{ color: 'grey', marginLeft: 35, marginTop: -5, width: window.width - 100, }}>Anyone can find the community and see who's in it. Only members can see posts</Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 15, marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ color: 'white', marginLeft: 35, fontWeight: 'bold' }}> Allow to be tagged </Text>
                <View style={{ flex: 1, alignSelf: 'flex-end', }}>
                  <Switch
                    onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                    style={{ flex: 1, alignSelf: 'flex-end', marginTop: 5, marginBottom: 10, marginTop: 5, marginRight: 20 }}
                    value={this.state.falseSwitchIsOn}
                    onTintColor='#BBAA64'
                    tintColor='#fffaf0'
                  />
                </View>
              </View>
              <Text style={{ color: 'grey', marginLeft: 35, marginTop: -5, width: window.width - 100, width: window.width - 100, }}> only your golf buddies will be able to posts</Text>
            </View>
            <View style={{ height: 2, marginLeft: 20, marginRight: 20, backgroundColor: "rgba(187, 170, 100, 0.5)", }}></View>

            {/* //dropdown */}
            <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'left',margin:10 }}>Add country</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'left',margin:10 }}>Add state</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ color: '#000', textAlign: 'left',margin:10 }}>Add city</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.lastbutton}>
                    <Text style={{ color: '#000', textAlign: 'center',margin:10 }}>Create</Text>
                  </View>
                </TouchableOpacity>

          </ScrollView>
        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'transparent',
  },
  coverImage: {
    width: window.width,
    height: window.height,
  },
  button:{
    alignSelf:'center',
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'black',
    width:window.width-40,
    height:40,
    borderRadius:50,
    marginRight:40,
    marginLeft:40,
    marginTop:10
  },
  lastbutton:{
    alignSelf:'center',
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'black',
    width:window.width-40,
    height:40,
    borderRadius:50,
    marginRight:40,
    marginLeft:40,
    marginTop:50
  },
} 