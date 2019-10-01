// By Dmitry
import React from 'react';
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
  ListView,
  ToastAndroid,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant.js';
import ChatButtonGroup from './FilterTabs.js';

const {
  CHAT
} = RouterScene;

export default class FirstScreen extends React.Component {
  
   constructor(props) {
    super(props)
       

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      searchText: '',
      searchHomeFeedText: '',

      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
      listDataSource: ds.cloneWithRows(this.listData),
    };
  }

  render() {
    let handleToUpdate = this.props.handleToUpdate;
    return (
      <View style={styles.container}>
     <View style={{marginBottom:25}}>
        <TouchableOpacity style={styles.closeButton}>
          <Image style={styles.newPopup} source={require("../../Images/DashImages/buttons/close.png")}/>
        </TouchableOpacity>
        <View style={{marginTop:42}}>
         <TextInput  secureTextEntry={this.props.secureTextEntry} placeholder={"Search"}
                placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid={'#bbaa64'} style={{color:"#fff",marginLeft:10}} />          
       </View>
        <ChatButtonGroup style={styles.buttonGroup} second={styles.active} first={styles.normal} handleToUpdate={handleToUpdate.bind(this)}/>
       <View style={{marginLeft:10,top:10}}>
         <View>
              <Text style={{marginLeft:10,top:20,color: '#aaa',fontSize:14}}>Who</Text>
              <TouchableOpacity><Image style={styles.newPopup1} source={require("../../Images/DashImages/buttons/plus.png")}/></TouchableOpacity>

        </View>
        <View>
              <Text style={{marginLeft:10,top:20,color: '#aaa',fontSize:14}}>Country</Text>
              <TouchableOpacity><Image style={styles.newPopup1} source={require("../../Images/DashImages/buttons/plus.png")}/></TouchableOpacity>

        </View>
        <View>
              <Text style={{marginLeft:10,top:20,color: '#aaa',fontSize:14}}>Category</Text>
              <TouchableOpacity><Image style={styles.newPopup1} source={require("../../Images/DashImages/buttons/plus.png")}/></TouchableOpacity>

        </View>
        <View>
              <Text style={{marginLeft:10,top:20,color: '#aaa',fontSize:14}}>Near me</Text>
              <TouchableOpacity style={styles.newPopup1}></TouchableOpacity>

        </View>
      </View>
      <View>
      <View style={{height:1.5, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:5, marginRight: 5,top:20,marginBottom:10}}>
                     </View>


                     <View style={{flexDirection: 'row', paddingTop:10,paddingBottom:10}}>
                     <View style={{marginBottom:0}}>
                     <Text style={{marginLeft:20,top:20,color:'black',fontSize:14,backgroundColor:'white',width:70,borderRadius:50,height:30,
                     textAlign:'center'}}>Couses</Text>
                     </View>
                      <View style={{marginBottom:0}}>
                      <Text style={{marginLeft:10,top:20,color:'black',fontSize:14,backgroundColor:'white',width:70,borderRadius:50,height:30,
                     textAlign:'center'}}>Top 100</Text>
                     </View>
                     
                    </View>

 <View style={{height:1.5, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:5, marginRight: 5,top:20}}>
                     </View>
                     
</View>

        <View style={{marginLeft:25,top:20}}>
         <TouchableOpacity><Text style={styles.leftText}>Serach results</Text></TouchableOpacity>
         
      </View>
      </View>
           <ListView showsVerticalScrollIndicator={false} 
            removeClippedSubviews={false}
            dataSource={this.state.listDataSource} 
            renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />
      
      </View>
    );
  }

  renderListItem(rowData, rowId) {
   
   
      return(
        <View>
          <TouchableOpacity style={styles.listItem}>
            <Image style={styles.listItemImage} source={rowData.image} />
            <View style={styles.listItemInfo}>
              <Text style={styles.listItemTitle}> {rowData.title} </Text>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle} </Text>
              <Text style={styles.listItemSubtitle}> {rowData.subtitle1} </Text>

              </View>
            </View>
             <View style={styles.badgeContainer}><Text style={styles.badge}>{rowData.unread}</Text></View>

          </TouchableOpacity>
          <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft: 60, marginRight: 10}}></View>
        </View>
      );
    }
  

  listData = [
    {
        title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    },
    {
        title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    },
    {
        title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    },
    {
        title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    },
    {
      title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
       unread: "{{cPno}}",
    },
    {
      title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    },
    {
        title: "{{Couses Name 1}}",
        subtitle: "{{Course City}}",
        subtitle1: "{{Couser Country}}",
        image: require("../../Images/DashImages/profile.png"),
        unread: "{{cPno}}",
    }
  ];

}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(0,0,0,0.9)',
  },
  closeButton: {
    position: "absolute",
    width: 30,
    height: 20,
    right: 9,
    top: 35,
    
  },
   pp: {
    position: "absolute",
    width: 65,
    height: 65,
    left: 10,
    top: 25,
  },
  newPopup: {
    width: 16,
    height: 16,
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 20,
    marginTop: 30,
    marginLeft:90,
    backgroundColor:'transparent'
  },
   subtitle: {
    textAlign: "left",
    color: "white",
    fontSize: 10,
    marginTop: 2,
    marginLeft:90,
    backgroundColor:'transparent'
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
    marginTop: 5,
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
    paddingRight:10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding:{
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 13,
    color: 'rgba(187, 170, 100, 1.0)',
  },
  listItemSubtitle: {
    fontSize: 11,
    color: '#aaa',
    marginLeft:2,
  },
  listItemImage: {
    width: 45,
    height: 45,
    resizeMode:'contain',
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10
  },
  badgeContainer:{
    justifyContent:'center',
  },
  badge:{
    color: 'black',
    backgroundColor: 'transparent',
    color:'#bbaa64',
    borderRadius: 20,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 8,
    fontSize: 13,
  },
  status:{
    color: '#aaa',
    fontSize: 10,
    marginRight: 5,
  },
  rightArrow:{
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  leftText:
  {
   color: '#aaa',
   marginTop:16,

  },
   newPopup1: {
    width: 16,
    height: 16,
    marginLeft:320,

  },
}
