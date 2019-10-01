// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';

const HomeFeedObj = (props) => {
  //By Dmitry 
    if (props.hidden == true) return null;
    if (props.editMode) {
        return (
            <Image style={styles.item} source={props.source} >
                <TouchableOpacity style={styles.closeButton} onPress={() => props.onDelete(props.index)} >
                    <Image style={styles.closeButton} source={require('../../Images/DashImages/closeButton.png')} />
                </TouchableOpacity>
            </Image>
        );
    }
    
    return (
        <TouchableOpacity
        onPress={props.onPress(props.index)}
        onLongPress={props.onLongPress}
        >
            <Image style={styles.item} source={props.source} />
        </TouchableOpacity>
    );
}
export default HomeFeedObj

const styles = {
  item: {
      margin: 10,
      width: 70,
      height: 70,
  },
  closeButton: {
      width: 20,
      height: 20,
  }
} 
