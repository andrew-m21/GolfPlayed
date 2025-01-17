
//Here  You can import component from Node modules
import {View,Button, TouchableOpacity,Image ,Text,Dimensions} from 'react-native'
import React ,{Component} from 'react'
import MapView from 'react-native-maps';
//Locals
import withConnect from './withConnect';
import CustomNavBar from  './CustomNavBar'
//This is Map component generated by Ramesh

//Here put Constant4
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
let zoomScale = 20;
import Constant from '../../../app/Constant/constant'
import styles from  './styles'
import MapControlView from './MapControlView'
import {Actions} from 'react-native-router-flux'
import DeviceUtils from "../../utils/DeviceUtils";
const screenWidth = DeviceUtils.screen.width;
const screenHeight = DeviceUtils.screen.height;

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
class GolfPlayedMap extends  React.PureComponent{


constructor(props){
    super(props)
    this.state = {
        mapRegion: null,
        lastLat: null,
        lastLong: null,
        latitudeDelta:  0.5,
        longitudeDelta: 0.5 * (screenWidth / screenHeight),
        statusBarHeight: 0,
        markers: [],
        mapType:'standard',
        zoomScale:20,
        navigation:0,
        showNavigationPopUp:false
    };
    // this.onPressZoomIn = this.onPressZoomIn.bind(this);
    // this.onPressZoomOut = this.onPressZoomOut.bind(this);
    // this.onRegionChange = this.onRegionChange.bind(this);
    // this.satelightClicked = this.satelightClicked.bind(this);


}

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                    color: randomColor(),
                },
            ],
        });
    }
   zoomIn = () =>{
    this.setState({
        zoomScale : this.state.zoomScale--
    })

   };

   zoomOut = () =>{
       this.setState({
           zoomScale : this.state.zoomScale++
       })
  };

   satelightClicked = () =>{
       if (this.state.mapType === 'standard'
       ){
           this.setState({
               mapType:'satellite'
           })

       }
       else{
           this.setState({
               mapType:'standard'
           })
       }

   };

   markerClicked = () =>{

  };
   naviGationClicked = () =>{

   };



    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude:       position.coords.latitude,
                longitude:      position.coords.longitude,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5 * (width / height)
            }
            this.onRegionChange(region, region.latitude, region.longitude);
            this._map.animateToRegion(region, 100);
        }, function (error) { alert(error) });
    }

    onRegionChange =  (region, lastLat, lastLong) => {
        this.setState({
            mapRegion: region,
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    componentWillMount() {
        setTimeout(() => this.setState({statusBarHeight: screenHeight-74}), 500);
    }

    componentWillUnmount() {
        //navigator.geolocation.clearWatch(this.watchID);
    }

   componentWillReceiveProps(nextProps){

   }

   backBtnPressed = () =>{
    Actions.pop()
    }

    onPress = (e) =>{
      return( <View style = {styles.bubble}>
           <Text>Title</Text>
           <Text>Description</Text>

       </View>)
    }
    onPressZoomIn = () => {
       let region = {
            latitude:       this.state.lastLat,
            longitude:      this.state.lastLong,
            ltDelta:        this.state.latitudeDelta * 10,
            lgDelta:        this.state.longitudeDelta * 10
        }
        this.setState={
            latitudeDelta:  region.ltDelta,
            longitudeDelta: region.lgDelta,
            lastLat: region.latitude,
            lastLong: region.longitude
        }
        this._map.animateToRegion(region, 100);
    }

    onPressZoomOut = () => {
       let region = {
            latitude:       this.state.lastLat,
            longitude:      this.state.lastLong,
            ltDelta:        this.state.latitudeDelta / 10,
            lgDelta:        this.state.longitudeDelta / 10
        }
        this.setState={
            latitudeDelta:  region.ltDelta,
            longitudeDelta: region.lgDelta,
            lastLat: region.latitude,
            lastLong: region.longitude
        }
        this._map.animateToRegion(region, 100);
        console.log('lt : ' + region.ltDelta + ' lg : ' + region.lgDelta)
    }

render(){
    return(<View style = {styles.container}>
            <MapView
                ref={component => {this._map = component;}}
                mapType = {this.state.mapType}
                provider={this.props.provider}
                style={styles.content}
                region={this.state.mapRegion}
                onPress={(e) => this.onMapPress(e)}
                    showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass ={true}
                zoomEnabled ={true}
                //onRegionChange={ (region, lastLat, lastLong) => this.onRegionChange.bind(this ,region, lastLat, lastLong)}


            >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        key={marker.key}
                        coordinate={marker.coordinate}
                        title = {'GolfPlayed'}
                        description = {'InProgress'}
                        pinColor={marker.color}
                        onSelect={(e) => this.onPress(e)}
                        onDrag={(e) => console.log('onDrag', e)}
                        onDragStart={(e) => console.log('onDragStart', e)}
                        onDragEnd={(e) => console.log('onDragEnd', e)}
                        onPress={(e) => this.onPress(e)}
                    />
                ))}


            <CustomNavBar
            title = {'Map'}
            onTap = {this.backBtnPressed}
        />

        </MapView>
        <MapControlView markerClicked = {this.markerClicked.bind(this )}
                            navigationClicked ={this.naviGationClicked.bind(this)}
                            zoomIn = {this.zoomIn} zoomOut ={this.zoomOut}
                            sateLightControl = {this.satelightClicked.bind(this)}/>



    </View>)
}



}
export default withConnect(GolfPlayedMap);