
import {StyleSheet,Dimensions} from  'react-native'
const { height, width } = Dimensions.get('window');

const IOS_BLUE = '#007AFF';
const MATERIAL_BLUE = '#2196F3';

const styles = StyleSheet.create({
    wrapper: {
    },

    alternativeLayoutButtonContainer: {
        position:'absolute',
        bottom:100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.0)',
        flex:0,
        width:width,
        height:100
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-40,
        height:40,
        flex:0,
        borderRadius:40,
        top:10,
        left:0
    },

    opacityButtonContainer: {
        position:'absolute',
        bottom:100,
        backgroundColor:'rgba(1,1,1,0.0)',
        alignItems: 'center',
        width:width,
        height:100
    },
    opacityButtonWrap: {
      marginTop:0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    opacityButton:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      width: width-40,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 40,
      margin: 20 
    },

    buttonAndroid:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width - 40,
        height:40,
        flex:0,
        borderRadius:40,
        top:50,
        left:0
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },


    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    logo_container: {

        flex:0,
        justifyContent:"center",
        alignItems:"center",
        marginTop : 100,
        resizeMode: 'contain'
    },

    logo_container2: {

        marginTop : 100,
        marginLeft : 45,
        marginRight : 45,
        height : 300,
        width: null,
        resizeMode: 'contain'
    },

    logo_container3: {
        justifyContent:"center",
        alignItems:"flex-start",
        marginTop : 150,
        marginLeft : 45,
        resizeMode: 'contain'
    },
    main_bg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text_container: {
        top:20,
        left: 40,
        justifyContent:'center',
        width: width - 60,
        height:50,
        resizeMode: 'contain'
    },
    text_container2: {
        top:-80,
        left: 40,
        justifyContent:'center',
        width: width - 60,
        height:50,
        resizeMode: 'contain'
    },
    textContainerIS:{
        top:-50,
        left: 40,
        justifyContent:'center',
        width: width - 60,
        height:50,
        resizeMode: 'contain'
    }

});
export  default styles;