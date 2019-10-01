import {View , Button ,Image , Text,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const {width,height} = Dimensions.get('window');
export  default  function SocialButton(onClicked ,image) {

    return(<View style = {styles.buttonContainer}>
        <Image source={(image)}
               style={styles.imageContainer}/>
        <Button onPress={() => onClicked}
                style={styles.eventBtnContainer }title=""/>

    </View>);
}

const styles = StyleSheet.create({

   buttonContainer:{
    flex:1,
       backgroundColor:'transparent'
   },
   imageContainer:{
    height:height/3,
    width:20,
    resizeMode:'contain'
   },
   eventBtnContainer:{
   backgroundColor : 'transparent'
   }


});
