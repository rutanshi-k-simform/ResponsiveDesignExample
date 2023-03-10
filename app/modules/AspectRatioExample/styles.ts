import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {verticalScale, height, width, horizontalScale, moderateScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    backgroundColor: '#B2D8EC',
    height: verticalScale(80),
    justifyContent: 'flex-end',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    width: horizontalScale(250),
    height: verticalScale(360),
    backgroundColor: '#B2D8EC',
    borderRadius: moderateScale(15),
  },
  image: {
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
    width: horizontalScale(250),
    height: verticalScale(200),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    color: 'black',
  },
  description: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    marginHorizontal: horizontalScale(10),
  },
});

export default styles;
