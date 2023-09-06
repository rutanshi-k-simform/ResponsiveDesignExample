import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  globalMetrics: {isWeb, isTablet},
} = Metrics;

const styles = StyleSheet.create({
  mainContainer: {
    flex: isWeb ? undefined : 1,
    backgroundColor: 'white',
  },
  flatList: {
    alignSelf: 'center',
  },
  contentContainerStyle: {
    gap: 10,
    padding: isWeb ? 10 : isTablet ? 5 : 3,
  },
  cardContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 5,
    width: isWeb ? 295 : isTablet ? 275 : 270,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: isWeb ? 295 : isTablet ? 275 : 270,
    aspectRatio: 1,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  brand: {
    fontSize: 14,
    fontWeight: '500',
    color: 'purple',
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});

export default styles;
