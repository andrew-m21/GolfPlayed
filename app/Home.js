import React from 'react';
import { 
  View,
  Alert,
  ToastAndroid,
  Text
} from 'react-native';

import  Dashboard  from './pages/dashboard/DashboardScreen';
export default class Home extends React.Component {


   constructor(props) {
    super(props);
    this.state = {
      navigator: null,
      menuFlag: 0,
      menu: [
        { id: 'Profile', title: 'My Profile'},
        { id: 'logout', title: 'Logout'}
      ]
    };
    
  }
  
  
  message(message){
    ToastAndroid.show(message, ToastAndroid.LONG);  
        
  }
  componentDidMount(){
      
    
   
  }

  
  
  doLogout = () => {
    
  }



  
  settings = () => {
    
    this.refs.menu.show();
   
  }




  render() {
  
          
  return (
    <View style={styles.container}>
    <Menu ref="menu" menu={this.state.menu} changeScene={this.changeScene}  doLogout={this.doLogout}/>

    <Dashboard
    {...this.props} />

    </View>
  );
  }
}


const styles = {
  container: {
      flexDirection: 'column',
      flex: 1
    }
};