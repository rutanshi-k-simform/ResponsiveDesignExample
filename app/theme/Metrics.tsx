import {Dimensions, Platform} from 'react-native';

let {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;

const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isWeb: Platform.OS === 'web',
};

export default {
  globalMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
};
