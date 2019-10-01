import React from 'react'
import {View, Text, Image} from 'react-native'
import RouterScene from '../../../Constant/constant'

const home = '../../../Images/DashImages/barItem/home.png';
const connect = '../../../Images/DashImages/barItem/connect.png';
const openMenu = '../../../Images/DashImages/barItem/openMenu.png';
const explore = '../../../Images/DashImages/barItem/explore.png';
const me = '../../../Images/DashImages/barItem/me.png';

const {
    HOME,
    CONNECT,
    EXPLORE,
    ME,
    OPENMENU,
} = RouterScene;

const TabIcon = ({selected, title}) => {
    switch (title) {
        case HOME:
        return (
            <Image style={styles.item} source={require('../../../Images/DashImages/barItem/home.png')} />
        )
        case CONNECT:
        return (
            <Image style={styles.item} source={require('../../../Images/DashImages/barItem/connect.png')} />
        )
        case OPENMENU:
        return (
            <Image style={styles.centerItem} source={require('../../../Images/DashImages/barItem/openMenu.png')} />
        )
        case EXPLORE:
        return (
            <Image style={styles.item} source={require('../../../Images/DashImages/barItem/explore.png')} />
        )
        case ME:
        return (
            <Image style={styles.item} source={require('../../../Images/DashImages/barItem/me.png')} />
        )
    }
}
export default TabIcon

const styles = {
    item: {
        width: 30,
        height: 30
    },
    centerItem: {
        width: 50,
        height: 50,
    }
}