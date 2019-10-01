import {StyleSheet} from 'react-native'
import FontUtils from '../../../app/utils/FontUtils'
import DeviceUtils from '../../../app/utils/DeviceUtils'
import Constant from '../../../app/Constant/constant'
export default StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flex:1,
    },
    controlView:{
        padding:2,
        borderRadius:17.5,
        backgroundColor:'transparent',
        flex :0,
        //justifyContent:'center',
        position:'relative',
        left:DeviceUtils.screen.width-50,
        top:DeviceUtils.screen.height/2-50,
        width:35,
        height: DeviceUtils.screen.height/3
    },
    item:{
        width:40,
        height:40,
        flex:0,
        justifyContent:'center',
        alignItems:'center'

    },
    image:{
        resizeMode:'contain',
        width:40,
        height:40,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        paddingVertical:10,
        bottom:50,
        right:30,
        position:'absolute',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },


})