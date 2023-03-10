import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  verticalScale,
  height,
  width,
  horizontalScale,
  moderateScale,
  globalMetrics: {isWeb},
} = Metrics;

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
    width: isWeb ? horizontalScale(380) : horizontalScale(250),
    height: isWeb ? verticalScale(220) : verticalScale(360),
    backgroundColor: '#B2D8EC',
    borderRadius: moderateScale(15),
    flexDirection: isWeb ? 'row' : 'column',
  },
  image: {
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: isWeb ? 0 : moderateScale(15),
    borderBottomLeftRadius: isWeb ? moderateScale(15) : 0,
    width: isWeb ? horizontalScale(220) : horizontalScale(250),
    height: isWeb ? verticalScale(220) : verticalScale(200),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: 'black',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  description: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    alignContent: 'stretch',
    marginHorizontal: horizontalScale(10),
    flexWrap: 'wrap',
  },
});

export default styles;
