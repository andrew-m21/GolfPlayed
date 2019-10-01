console.disableYellowBox = true;
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  Dimensions,
  NavigatorIOS,
  Navigator,
  AsyncStorage,
  Alert,
  ToastAndroid,
  NetInfo
} from 'react-native';
import { Sentry } from 'react-native-sentry';
import DeviceInfo from 'react-native-device-info';
import App from './app/index'

export default class GolfPlayed extends Component {
  constructor(props) {
    super(props);
    Sentry.config("https://af7680542b8c45d0b669537bc8c67560:4c7ee9f1c7784a29bc84dd7fa86151e3@sentry.io/250885").install();
  }
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('GolfPlayed', () => GolfPlayed);