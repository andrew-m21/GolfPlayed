/** This is created by Ramesh for Optimistic design and
 * functionality of the Authentication  scenes
 * This is what you should use the greatest Example of Native -Base Open source **/




import React,{Component} from 'react'
import {View ,Button,Text,Image } from  'react-native'
import  styles from '../CommanStyle'
import InputBox from '../Resused/AuthInputFeild'
/** setupBack ground Image **/
const backGroundImage = require('../../../Images/tut1_bg.png');
const logoImage = require('../../../Images/tut1_logo.png');
const logoText = require('../../../Images/tut1_text.png');
class LoginScene extends  React.PureComponent{


    constructor(props){
        super(props)
    }

    componentWillMount(props){

    }

    componentDidMount(props){

    }
    inputBoxOnSend = () =>{

    };
    render(){
        return(<View style = {styles.container}>

            <Image source = {backGroundImage}
                   style = {styles.backGroundImage}/>
            <View style ={styles.contentContainer}>
                <Image source={logoImage}
                       style={styles.logoImageStyle}/>
                <View style = {styles.authContainer}><InputBox onSend={()=> this.inputBoxOnSend}
                                                               attachFile={()=> this.inputBoxOnSend}/>
                 </View>
            </View>

        </View>)
    }
}
export  default LoginScene