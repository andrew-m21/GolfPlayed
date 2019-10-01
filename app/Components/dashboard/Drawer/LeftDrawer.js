import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js';
import Select from './Select';

const {
    FEEDBACK,
    MAPCOMPONENT,
  } = RouterScene;

export default class LeftDrawer extends Component {

    //NaviGate To Map

    gotoMap =  () => {
        Actions[MAPCOMPONENT]()
    }






    render() {
        const fullName = '{{fullName}}';

        return <View style={styles.container}>
            <Text style={[styles.title, styles.item]}>Menu</Text>
            <Select title="FullName" image={require("../../../Images/DashImages/profile.png")}/>
            <TouchableOpacity>
              <Text style={styles.item}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>My Course</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>RoundPlayed</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Budget List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {this.gotoMap}>
              <Text style={styles.item}>Map</Text>
            </TouchableOpacity>
            <Select title="Capture" image={require("../../../Images/DashImages/buttons/close.png")}/>
            <Select title="Reports" image={require("../../../Images/DashImages/buttons/close.png")}/>
            <TouchableOpacity onPress={() => Actions[FEEDBACK]()}>
                <Select title="Tools" image={require("../../../Images/DashImages/buttons/close.png")} />
            </TouchableOpacity>
          </View>;
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        padding: 30,
        height: '100%',
        width: '100%',
    },
    icon: {
        width: 24,
        height: 24
    },
    item: {
        fontSize: 20,
        color: 'black',
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 30
    },
    dropdownItem: {
        flexDirection: 'row',
        justifyContnet: 'space-between',
    },
}
