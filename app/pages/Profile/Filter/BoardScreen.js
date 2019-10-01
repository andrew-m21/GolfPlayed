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
  ScrollView,

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js';
import FilterTabs from './FilterTabs.js';
//import Grid from 'react-native-grid-component';
import Modal from 'react-native-modal';
import styles1 from './app.style';

const {
  CHAT
} = RouterScene;

export default class BoardScreen extends React.Component {
 



  _renderItem = (data, i) => <View style={[{backgroundColor: 'transparent'}, styles.item]} key={i}>
       <Image style={{height:55,width:55,marginLeft:20}} source={require("../../../Images/DashImages/HomeFeeds/HomeFeed1.png")}/>
<Text style={{marginLeft:20,marginTop:8,color:'rgba(187, 170, 100, 1.0)'}}>Shubham</Text>
  </View>

   constructor(props) {
    super(props)
       
 
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      searchText: '',
      searchHomeFeedText: '',
visibleModal : null,
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
      <Image style={styles.pp} source={require("../../../Images/DashImages/profile.png")}/>
        <Text style={styles.title}>Name</Text>
         <Text style={styles.subtitle}>Course Name</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Image style={styles.newPopup} source={require("../../../Images/DashImages/buttons/close.png")} onPress={() => Actions.pop()}/>
        </TouchableOpacity>
          <View>
            <View style={{height:1.5, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:5, marginRight: 5,top:10}}></View>
          </View> 
        <FilterTabs style={styles.buttonGroup} second={styles.active} first={styles.normal} handleToUpdate={handleToUpdate.bind(this)}/>
         <View style={{marginBottom:10}}>
 <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 0.5)", marginLeft:5, marginRight: 5,top:10}}></View>
 <View style={{marginBottom:10,marginTop:20}}><TouchableOpacity  style={styles.question} onPress={this.OnBUttonPress}>
          <Image style={styles.newPopup} source={require("../../../Images/DashImages/popupIcon/repost.png")}/>
        </TouchableOpacity>
        <Modal
        
          isVisible= {this.state.visibleModal === 4}
          
          backdropColor={'rgba(0,0,0,0.85)'}
          backdropOpacity={.85}

          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderModalContent()}
        
        </Modal>
        </View>
                     
</View> 
        <ListView showsVerticalScrollIndicator={false} 
            removeClippedSubviews={false}
            dataSource={this.state.listDataSource} 
            renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />
      </View>
    );
  }
   OnBUttonPress = () => {
   this.setState({visibleModal:4})
  }
 closePress = () => {
   this.setState({visibleModal:null})
  }
  _renderModalContent = () => (
    <View style={{flex: 1}}>
      
    <View >
      <TouchableOpacity style = {{position: "absolute", right: 5, zIndex: 10,}} onPress={this.closePress}>
        <Image style={styles.newPopupOverlay} source={require("../../../Images/DashImages/buttons/close.png")}/>
      </TouchableOpacity>
      <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:-5, justifyContent: 'center',  textAlign : 'center',}}>How invites work</Text>
    </View>

<ScrollView>
           <View style={{marginTop:5, alignItems : 'center', textAlign:'center', }}>
       <Text style={styles1.overlayStyle}>{"\n"}Markers & personal ID code{"\n"}</Text>
      
      <Text style={styles1.overlayStyle}>Each person that you refer to GolfPlayed will be linked to your profile when they register on 
         the plateform, and become part of your referral network{"\n"}</Text>

       <Text style={styles1.overlayStyle}>You will recieve 1 maker for each new user that becomes part of your refferal network{"\n"}</Text>  

       <Text style={styles1.overlayStyle}>The GolfPlayed plateform  will be monetized in 2018. From this date until the 31st of December 2022 
        you will recieve a percentageof the spend of each person in your refferal network.{"\n"}</Text> 

       <Text style={styles1.overlayStyle}>Markers are used to populate your Markerboard, Which will be activated in future release of the App.{"\n"}</Text> 

       <Text style={styles1.overlayStyle}>Your personal ID code is your unique number which is used to link each person that you refer to your 
      profile on th GolfPlayed plateform. The code is automatically incorporated into the links which are created when you invite your friends or tag      
      them in a round, and can also be manually inserted at the time of registration by a new user.{"\n"}</Text>  

       <Text style={styles1.overlayStyle}>A number of features will be incorporated into future release of GolfPlayed that will also access your Personal ID code.{"\n"}</Text>  

       <Text style={styles1.overlayStyle}>The refferal programe will be sent out in the Terms and Condition on the plateform which will be updated from time to time.{"\n"}</Text>

       </View>
      </ScrollView>
      

      </View>
     



  );
  renderListItem(rowData, rowId) {
    if(rowId == this.listData.length - 1)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, styles.lastItemPadding]}>
             <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data={ [
    'A','B','C'
  ]}

        itemsPerRow={3}
      />
          </TouchableOpacity>
        </View>
      );  
    }
    else if(rowId == 0)
    {
      return(
        <View>
          <TouchableOpacity style={[styles.listItem, {marginTop: 20}]}>
            <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data={ [
    'A','B','C'
  ]}

        itemsPerRow={3}
      />

          </TouchableOpacity>
        </View>
      );  
    }
    else
    {
      return(
        <View>
          <TouchableOpacity style={styles.listItem}>
            <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data={[
    'A','B','C'
  ]}
        itemsPerRow={3}
      />

          </TouchableOpacity>
        </View>
      );
    }
  }

  listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 1,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 2,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 3,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 4,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 5,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 6,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        unread: 7,
    }
  ];

}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  closeButton: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 12,
    top: 40,
  },
  closeButtonOverlay: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 12,
    top: 40,
  
    backgroundColor:'red'
  },
   question: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 12,
    backgroundColor:'transparent',
    marginBottom:5,
  },
   pp: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 10,
    top: 30,
  },
  newPopup: {
    width: 16,
    height: 16,

  },
   newPopupOverlay: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 18,
    marginTop: 30,
    marginLeft:70,
    backgroundColor:'transparent'
  },
   subtitle: {
    textAlign: "left",
    color: "white",
    fontSize: 12,
    marginTop: 2,
    marginLeft:70,
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
    paddingRight:10,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  lastItemPadding:{
    marginBottom: 70,
  },
  listItemTitle: {
    fontSize: 20,
    color: '#fff',
  },
  listItemSubtitle: {
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
    paddingLeft: 10
  },
  badgeContainer:{
    justifyContent:'center',
  },
  badge:{
    color: 'black',
    backgroundColor: '#bbaa64',
    borderRadius: 20,
    padding: 5,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
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
   item: {
    flex: 1,
    height: 85,
    width:60,
    borderRadius:0,
    margin: 1,
    color:'red',
  },
  list: {
    flex: 1
  },
}
