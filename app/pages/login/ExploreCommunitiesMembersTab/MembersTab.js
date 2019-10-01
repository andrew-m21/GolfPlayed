import React, { Component } from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ListView,Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const userPic = require("../../../Images/DashImages/profile.png");
const deletePic = require("../../../Images/DashImages/closeButton.png");

const datas = [
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
    {
        userPic: userPic,
        userName: '{{buddyFullName}}',
        address: '{{mNo.}}{{mutualFriends}}{{friendCountry}}',
        deletePic: deletePic,
    },
];


export default class MembersTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ''
        }
    }
    onSelectTab(selectedTab) {
        this.setState({ selectedTab })
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View >
                {this.props.isSelected && <View style={styles.container}>

                <ListView
                  enableEmptySections={true}
                  dataSource={ds.cloneWithRows(datas)}
                  renderRow={(rowData) =>
                    <View style={{ marginTop: 25, height: 45, width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                        <View
                            style={{ position: 'absolute', left: 15, width: 350 }}>
                            <View
                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ marginRight: 5, width: 60, height: 60, borderRadius: 30 }}
                                   source={rowData.userPic} />
                                <View style={{width:270}}>
                                    <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 18, }}>
                                    {rowData.userName}</Text>
                                    <Text style={{ color: "#BBAA64", fontSize: 15, }}>
                                    {rowData.address}</Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{ position: 'absolute', right: 15,}}>
                            <Image style={{ width: 30, height: 30, borderRadius: 15 }}
                               source={rowData.deletePic} />
                        </View>
                    </View>} />

                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
    },

});