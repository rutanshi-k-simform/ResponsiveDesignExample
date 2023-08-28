import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const guidelineBaseWidth = Platform.OS === 'web' ? 1024 : 390;
const guidelineBaseHeight = Platform.OS === 'web' ? 600 : 812;

let {width, height} = Dimensions.get('window');

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isWeb: Platform.OS === 'web',
  isTablet:
    (Platform.OS === 'ios' && Platform.isPad) ||
    DeviceInfo.getDeviceType() === 'Tablet',
};

export default {
  globalMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
};
