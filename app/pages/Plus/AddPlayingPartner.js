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
    ListView,
    Dimensions,
    ScrollView,
    Switch, Button,
    Picker,
} from 'react-native';
import SimpleInputContainer from '../Component/InputContainer/SimpleInputContainer';
const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { Actions } from "react-native-router-flux";
import Modal from 'react-native-modal'
import RouterScene from '../../Constant/constant';

const {
    ADDYOUROWNPIN,
    } = RouterScene;

const backgroundimage = require('../../Images/tut1_bg.png');
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');



export default class AddPlayingPartner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showPostOption: false,
            user: '',
            show: false,
            switchValue: true,
            visibleModal: false,
        }
        this.openDialog(true);
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })

    };

    handlePress(i) {
        alert(i)
    }
    onShowPostOption = (show) => {
        this.setState({
            showPostOption: show
        })
    }
    onShow = () => {
        if (this.state.show == false) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }

    }
    _showModal = () => this.setState({ visibleModal: true })
    
      _hideModal = () => this.setState({ visibleModal: false })

    MEMBERS_AREA_MARKET_PLACE_DRIVER = () => {
        //By Harshit
        Actions[MEMBERS_AREA_MARKET_PLACE_DRIVER]()
    };
    CALCULATOR = () => {
        //By Harshit
        Actions[CALCULATOR]()
    };
    ADDYOUROWNPIN = () => {
        //By Harshit
        _hideModal = () => this.setState({ visibleModal: false })
        Actions[ADDYOUROWNPIN]()
    };

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.coverImage} source={backgroundimage} >

                    <View>
                        <View style={{ marginTop: 20, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                            <Text style={{ backgroundColor:'transparent',fontWeight: 'bold', color: "#fff", fontSize: 18, position: 'absolute', }}>
                                Add Playing Partner</Text>

                            <View
                                style={{ position: 'absolute', right: 15, }}>

                                <TouchableOpacity 
                                style={{ position: 'absolute', right: 15, }}>
                                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                            </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView style={{ height: window.height - 140, }}>
                            <View>
                                <View style={{ marginTop:30 }}>
                                    <TextInput style={{height:50,width:'70%',marginLeft:20,marginRight:20}}
                                        placeholder={'search'}
                                        secureTextEntry={this.props.secureTextEntry}
                                        autoCorrect={this.props.autoCorrect}
                                        autoCapitalize={this.props.autoCapitalize}
                                        returnKeyType={this.props.returnKeyType}
                                        placeholderTextColor='#000'
                                        underlineColorAndroid='transparent'/>
                                </View>
                                <View style={{height:1, backgroundColor: "rgba(187, 170, 100, 1)"}}></View>
                                <Text style={{ backgroundColor:'transparent' ,fontWeight: 'bold', color: "#fff", fontSize: 15,marginLeft:20,marginTop:10 }}>
                                    Sorry, no result were found</Text>
                                <Text style={{ backgroundColor:'transparent' ,fontWeight: 'bold', color: "grey", fontSize: 14,marginLeft:20,marginTop:15}}>
                                   it looks like this user is not on the app yet!{'\n'}Invite them below </Text>
                                
                                <TouchableOpacity>
                                    <View style={[styles.bottomButton]}>
                                        <Text style={{
                                            textAlign: 'center',
                                            textAlignVertical: 'center', color: 'black',
                                            fontSize: 15, backgroundColor: 'transparent'
                                        }}>Invite User</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ backgroundColor:'transparent' ,fontWeight: 'bold', color: "grey", fontSize: 14,marginLeft:20,marginTop:30,marginRight:10}}>
                                   it looks like this user is not on the app yet!. kgsdkhjgfdskjv f hjvdshvh svfkjsdgfl. gfksdgkfj{'\n'}Invite them below </Text>
                                <View style={{ flexDirection:'row',backgroundColor:'transparent'}}>
                                <Text style={{ backgroundColor:'transparent' ,fontWeight: 'bold', color: "rgba(187, 170, 100, 1)", fontSize: 15,marginLeft:20,marginTop:10 }}>
                                    Learn more</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = {
    container: {
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
        marginBottom: 15,
        backgroundColor: '#3B3A3A',
        borderRadius: 8,
        height: window.height
    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    input: {
        backgroundColor: '#F6F6F6',
        width: width - 35,
        height: 100,
        marginHorizontal: 15,
        paddingLeft: 15,
        borderRadius: 5,
        color: '#000',
    },
    greyFont: {
        color: '#fff',
        height: 45,
        marginLeft: 20,
        marginRight: 20,
    },
    inputContainer1: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20, marginTop: 10,
        marginBottom: 10
    },
    inputContainer2: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 5
    },
    greyFont1: {
        color: '#7f7f7f',
        height: 40,
        marginLeft: 10,
        marginRight: 10,

    },
    greyFont2: {
        color: '#7f7f7f',
        height: 100,
        marginLeft: 10,
        marginRight: 10,

    },
    coverImage: {
        width: window.width,
        height: window.height,
    },
    coverImage1: {
        width: window.width - 40,
        height: 160,
        borderRadius: 10,
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        alignSelf: 'flex-start',
    },
    innerView: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },
    nameView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    fullName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 70,
        marginBottom: 1,
        backgroundColor: 'transparent',
        marginLeft: 10
    },
    memberSection: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        marginLeft: window.width / 2.5,
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'black',
        width: window.width - 40,
        height: 40,
        borderRadius: 50,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 70,
        marginTop: 30
    },
    button1: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'black',
        width: 180,
        height: 40,
        borderRadius: 50,
        margin: 5
    },
    bottomButton: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        width: width - 40,
        height: 35,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    leftButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: (window.width / 2) - 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
        padding: 5,
    },
    rightButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: (window.width / 2) - 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#BBAA64',
        
        padding: 5
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 15,
        backgroundColor: 'transparent'
    },
    gap:{
      width: 3,
    },
    modalContent: {
        backgroundColor: 'white',
       height:300
      },
      modalInnerContent: {
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      rightArrow:{
        marginTop:10,
        width: 20,
        height: 20,
        position: 'absolute',
      },
      rightArrow1:{
        marginTop:10,
        width: 20,
        height: 20,
        position: 'absolute',
        right:20
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-40,
        borderRadius: 50,
        margin: 20, 
        height:40
      }
}