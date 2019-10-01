import {StyleSheet,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

const styles =  StyleSheet.create({

   container:{
       flex:1 ,
   },
   contentContainer :{
       flex:1,
       backgroundColor:'transparent',
       position:'absolute'
   },
    authContainer:{
       top:80,
       justifyContent:'center',
        alignItems:'center',
      flex:0,
      height:height/2,
      width:width,
      backgroundColor:'red'
    },

   logoImageStyle:{
     flex:1,
     width: width- 60,
     height: 80,
     top:60,
     left:30,
     //position:'absolute',
     justifyContent:'center',
     alignItems:'center',
     resizeMode:'contain'

   },

   logoTextStyle:{

   },
   textInputStyle:{
       height: 30,
       width: width-100,
       marginLeft:20,
       marginRight:20,

   },
    backGroundImage:{

        flex:1,
        width:width,
        height:height

    },

   buttonStyle:{

   },

   fontStyle:{

   }



});

export default  styles;