// By Dmitry
import React, {Component} from 'react';
import { 
  StyleSheet,
  ListView,
  View
} from 'react-native';
import HomeFeedObj from "./HomeFeedObj.js";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SearchBar from "./SearchBar.js"

class HomeFeed extends Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            editMode: false,
            dataSource: ds.cloneWithRows(this.props.objects),
        }
    }

    onPressWidget = (index) => {        
          }
    onLongPressWidget = () => {
        this.updateData()
    }

    updateData() {
        var newArray = this.props.objects.slice()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            editMode: true,
            dataSource: ds.cloneWithRows(newArray),
        })
    }

    onDelete = (index) => {
        this.props.onDeleteItem(index);
        this.updateData()
    }
    render() {
        const config = {
            velocityThreshold: 0,
            directionalOffsetThreshold: 80
        };
        if (this.props.show == false) {
            if (this.state.editMode) {
                this.setState({
                    editMode: false
                })
            }
            return (
                <GestureRecognizer
                onSwipeDown={this.props.onSwipeDown}
                onSwipeUp={this.props.onSwipeUp}
                config={config}
                style={[styles.container, this.props.style, {backgroundColor: 'transparent'}]} />
            )
        }
        return (
            <GestureRecognizer
            onSwipeUp={this.props.onSwipeUp}
            config={config}
            style={[styles.container, this.props.style]} >
                <SearchBar show={true}
                    placeholder="Search your home feed"
                    hasButton={false} />
                <ListView style={{paddingBottom: 5}} horizontal={true} showsHorizontalScrollIndicator={false} 
                dataSource={this.state.dataSource} renderRow={(rowData, sectionID, rowID) => (<HomeFeedObj 
                index={rowID}
                source={rowData.image}
                onPress={this.onPressWidget}
                onLongPress={this.onLongPressWidget}
                onDelete={this.onDelete}
                editMode={this.state.editMode}/>) } />
            </GestureRecognizer>
        );
    }
}
export default HomeFeed

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: '#000000A0',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'column'
  },
  
  item: {
      margin: 10,
      width: 70,
      height: 70,
  }
} 
