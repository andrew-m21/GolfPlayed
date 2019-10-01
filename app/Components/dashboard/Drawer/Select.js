import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

export default class Select extends Component {
    render() {
        return(
            <View style={styles.container} onPress={() => toggle()}>
                <Image style={styles.image} source={this.props.image}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <Image style={styles.icon} source={require("../../../Images/DashImages/arrowDownButton.png")}/>
            </View>
        );
    }

}

const styles = {
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    image:{
        width: 15,
        height: 15,
    },
    title:{
        flex: 1,
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
    },
    icon:{
        width: 20,
        height: 20,
    }
}
