import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  verticalScale,
  horizontalScale,
  moderateScale,
  width,
  globalMetrics: {isWeb, isTablet},
} = Metrics;

const styles = StyleSheet.create({
  mainContainer: {
    flex: isWeb ? undefined : 1,
    backgroundColor: 'white',
  },
  flatList: {
    alignSelf: 'center',
    width: width - moderateScale(100),
  },
  contentContainerStyle: {
    rowGap: horizontalScale(10),
    columnGap: verticalScale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: moderateScale(10),
  },
  cardContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: moderateScale(3),
    borderRadius: moderateScale(5),
    width: isWeb
      ? horizontalScale(219)
      : isTablet
      ? horizontalScale(134)
      : horizontalScale(250),
    backgroundColor: 'white',
  },
  image: {
    aspectRatio: 1,
  },
  textContainer: {
    padding: moderateScale(10),
  },
  title: {
    fontSize: isWeb
      ? moderateScale(14)
      : isTablet
      ? moderateScale(16)
      : moderateScale(18),
    fontWeight: '700',
    color: 'black',
  },
  brand: {
    fontSize: isWeb
      ? moderateScale(12)
      : isTablet
      ? moderateScale(14)
      : moderateScale(16),
    fontWeight: '500',
    color: 'purple',
  },
  description: {
    fontSize: isWeb
      ? moderateScale(12)
      : isTablet
      ? moderateScale(14)
      : moderateScale(16),
    fontWeight: '500',
    color: 'black',
  },
  price: {
    fontSize: isWeb
      ? moderateScale(14)
      : isTablet
      ? moderateScale(16)
      : moderateScale(18),
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});

export default styles;
