// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

//By Dmitry 
    const profileImage = require('../../Images/DashImages/profile.png');
    const dashImage = require('../../Images/DashImages/dashimg.png');
    const fullName = "{{fullName}}";
    const homeClub = "{{homeClub}}";
    const comment = "{{timeAgo}} {{locationCity}} {{locationCountry}}";
    const fullComment = "{{fullComment}} Here is the comment of the round over a maximum of 2 lines, # Hasting and @users in Medium";
    const postDescription = "{{postDescription}} Here is the post description full width over a maximum of 2 linkes, # Hasting and @users in Medium";
    const comment1 = "{{fl}} and {{tl}} others...";
    const comment2 = "{{tc}} comment {{ts}} shares";
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.profileImage} source={profileImage} />
            <View style={styles.profile}>
              <View style={styles.flex_row}>
                <Text style={styles.fullName}> {fullName} </Text>
                <TouchableOpacity onPress={() => this.props.onShowPostOption(true)} >
                  <Image style={styles.icon} source={require('../../Images/DashImages/arrowDownButton.png')} />
                </TouchableOpacity>
              </View>
              <Text style={styles.homeClub}> {homeClub} </Text>
              <Text style={styles.comment_small} numberOfLines={1}> {comment} </Text>
            </View>
        </View>
        <View style={styles.header}>
            <Text style={styles.fullComment}> {fullComment} </Text>
        </View>
        <Image style={[styles.dashImage, styles.flex_row_from_end]} source={dashImage} >
            <Image style={[styles.icon, styles.groupMargin]} source={require('../../Images/DashImages/roundScore.png')} />
            <Image style={[styles.icon, styles.groupMargin]} source={require('../../Images/DashImages/clubIcon.png')} />
        </Image>
        <View style={styles.header}>
            <Text style={styles.fullComment}> {postDescription} </Text>
        </View>
        <View style={[styles.flex_row, styles.bottomBorder, styles.group]}>
          <View style={styles.flex_row}>
          <Image style={styles.icon} source={require('../../Images/DashImages/flag_grey.png')} />
            <Text style={styles.comment}> {comment1} </Text>
          </View>

            <Text style={styles.comment2}> {comment2} </Text>
        </View>
        <View style={[styles.flex_row, styles.bottomButtonGroup, styles.group]}>
          <TouchableOpacity style={styles.buttonWithIcon} onPress={() => this.props.onLike(true)} >
            <Image style={styles.icon} source={require('../../Images/DashImages/flag_yellow.png')} />
            <Text style={styles.comment}> Like </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithIcon}>
            <Image style={styles.icon} source={require('../../Images/DashImages/comment_grey.png')} />
            <Text style={styles.comment}> Comment </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithIcon}>
            <Image style={styles.icon} source={require('../../Images/DashImages/share_grey.png')} />
            <Text style={styles.comment}> Share </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom:15,
    backgroundColor:'#FCFCFC',
    marginLeft:1,
    marginRight:1,
    marginTop:4,
    borderRadius:  8,
  },
  flex_row: {
    flexDirection :'row',
    justifyContent: 'space-between',


  },
  flex_row_from_end: {
    flexDirection :'row',
    justifyContent: 'flex-end',
  },
  groupMargin: {
      margin: 10,
  },
  group: {
    paddingTop:10,
    paddingBottom:10,
  },
  bottomButtonGroup: {
    paddingLeft:10,
    paddingRight:10,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  scene: {
    flex: 1,
    marginTop: 56,
    backgroundColor: '#fff'
  },
  grid: {
      justifyContent: 'center',
        alignItems:'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  card: {
    paddingTop: 10
  },
  cardHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,
    padding:0
  },
  buttonWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    resizeMode:'contain',
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  homeClub: {
    fontSize: 15,
    color: 'black'
  },
  comment_small: {
    fontSize: 12,
    color: 'grey'

  },
  comment: {
    fontSize: 13,
    color: 'grey',
    marginRight:1,
  },
    comment2:{
        fontSize: 13,
        color: 'grey',
        marginRight:5,
    },
  fullComment: {
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dashImage: {
    margin: 0,
    width: '100%',
    height: 210,
    resizeMode: 'contain',
  }
} 
