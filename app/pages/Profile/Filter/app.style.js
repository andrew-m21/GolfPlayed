import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
   
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'transparent',
    
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
   textStyle:{      fontSize:15,      fontWeight:'bold',      color:'black',     justifyContent: 'center',     alignItems: 'center'    },
  overlayStyle:{
     fontSize:15,
     color:'white',
     //flex: 1,
     justifyContent: 'center', 
     textAlign : 'center',
  },
   overlayStyleText:{
    
     fontSize:15,
     color:'white',
  },
  overlayStylePara:{
     //flex: 1,
     justifyContent: 'center', 
     alignItems : 'center',
  },
  overlayStyleHeading:{
     fontSize:15,
     fontWeight:'bold',
     color:'white',
     //flex: 1,
     justifyContent: 'center', 

  },
});
