

import { Platform, StyleSheet } from 'react-native';

// utils
import FontUtils from '../utils/FontUtils';
import DeviceUtils from '../utils/DeviceUtils';

const { navBarHeight, navBarPadding, statusBarHeight } = DeviceUtils;

export default StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    height: navBarPadding,
  },
  navTitle: FontUtils.build({
    size: 18,
    align: FontUtils.aligns.center,
    color: '#4A4D55',

    // Extra
    width: 200,
    alignSelf: 'center',
  }),
  navTitleWrapper: {
    marginTop: 10,
    position: 'absolute',
    top: Platform.select({ ios: 20, android: 5 }),
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
    width: navBarHeight,
    height: navBarHeight,
    top: Platform.select({ ios: statusBarHeight, android: 0 }),
    left: 0,
  },
  backButtonImage: {
    marginTop : 20,
    width: 18,
    height: 16.5,
  },

  authNavBar: {
    backgroundColor: 'transparent',
  },
  authNavTitle: {
    color: 'white',
  },
  authNavButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    paddingTop: 17,
    paddingLeft: 16,
  },

  tabScenes: {
    ...Platform.select({ android: { paddingTop: statusBarHeight } }),
  },
  navScenes: {
    flex: 1,
    paddingTop: navBarPadding,
    backgroundColor: 'white',
  },
   noInternet:{
     height:50,

   }
});
