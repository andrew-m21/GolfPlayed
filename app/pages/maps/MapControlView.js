import{View,Image,Button,TouchableOpacity,Text} from 'react-native'
import styles from './styles'
import React from 'react'
//Here put Constant
import Constant from '../../../app/Constant/constant'
export default function MapControlView({markerClicked,navigationClicked ,zoomIn,zoomOut,sateLightControl}) {


return(<View style = {styles.buttonContainer}>

    <TouchableOpacity style = {styles.item} onPress = {navigationClicked}>
        <Image style={styles.image} source={Constant.MAP_ICONS.Navigation}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {markerClicked}>
        <Image style={styles.image} source={Constant.MAP_ICONS.Marker}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {sateLightControl}>
        <Image style={styles.image} source={Constant.MAP_ICONS.SateLight}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {zoomIn}>
        <Image style={styles.image} source={Constant.MAP_ICONS.ZoomIn}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {zoomOut}>
        <Image style={styles.image} source={Constant.MAP_ICONS.ZoomOut}/>
    </TouchableOpacity>
</View>)

}