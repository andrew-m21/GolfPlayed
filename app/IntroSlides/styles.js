/**
 * @providesModule ESNext.Components.IntroSlides.styles
 */

import { Platform, StyleSheet } from 'react-native';

// Utils
import FontUtils from 'app/utils/FontUtils';
import DeviceUtils from 'app/utils/DeviceUtils';

const SWIPE_DOT_SIZE = 12;
const SWIPE_DOT_BORDER_WIDTH = 2;
const SWIPE_DOT_MARGIN = 9;

export default StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundView: {
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: DeviceUtils.screen.width,
    height: DeviceUtils.screen.height,
    backgroundColor: '#8185d6',
  },
  backgroundCircles: {
    marginTop: -20,
    width: 500,
    height: 500,
  },

  swiper: {
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  slideIcon: {
    marginTop: 120,
  },
  slideSubtitle: FontUtils.build({
    align: FontUtils.aligns.center,
    color: '#ebf3f7',
    size: 14,

    // Extra
    marginTop: 34,
  }),
  slideContent: FontUtils.build({
    align: FontUtils.aligns.center,
    color: '#eff5f8',
    size: 16,

    // Extra
    ...Platform.select({ ios: { lineHeight: 24 } }),
    marginTop: 13,
  }),
  swipePagination: {
    bottom: 30,
  },
  swipeDot: {
    width: SWIPE_DOT_SIZE,
    height: SWIPE_DOT_SIZE,
    marginHorizontal: SWIPE_DOT_MARGIN,
    backgroundColor: '#c4c5cf',
    borderRadius: SWIPE_DOT_SIZE / 2,
    borderWidth: SWIPE_DOT_BORDER_WIDTH,
    borderStyle: 'solid',
    borderColor: '#fbfcfd',
  },
  swipeDotActive: {
    backgroundColor: '#e13c50',
  },

  skipButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 97,
  },
  skipButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 168,
    height: 48,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 2,
  },
  skipButtonText: FontUtils.build({
    align: FontUtils.aligns.center,
    color: '#eff5f8',
    size: 14,
  }),
});
