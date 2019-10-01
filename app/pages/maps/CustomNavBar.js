/** @ProvideModule GolfPlayed.app.constant **/

//This module is created by Ramesh
import {View,Button,Text,Image,StyleSheet,TouchableOpacity,Model } from 'react-native'
import React from  'react'
import FontUtils from '../../../app/utils/FontUtils'
import DeviceUtils from '../../../app/utils/DeviceUtils'
import Constant from '../../../app/Constant/constant'

export default  function CustomNavBar ({title ,onTap}) {

    return(
        <View style = {styles.navConatiner}>
            <TouchableOpacity style={styles.backBtnContainer} onPress = {onTap}>
                <Image style={styles.backBtnImage} source={Constant.MAP_ICONS.BackImage}/>
            </TouchableOpacity>
            <Text style={styles.title}>My Map</Text>
        </View>)
}

const styles = StyleSheet.create({

   navConatiner:{


       backgroundColor:'rgba(0,0,0,0.1)',
       width: DeviceUtils.screen.width,
       height:60,
       flexDirection:'row',
       alignItems:'center',
       color:'transparent'
   },

   backBtnImage:{
       left:10,
       backgroundColor:'transparent',
       resizeMode:'contain',
       width:10,

   },
   backBtnContainer:{
       backgroundColor:'transparent',
         left:10,
         width:30,
   },

   title : FontUtils.build({

       left: (DeviceUtils.screen.width/2)-60,
       size:16,
       backgroundColor:'transparent',
       color:'white',

   })



});