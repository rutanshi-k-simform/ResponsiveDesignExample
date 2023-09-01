import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  globalMetrics: {isWeb, isTablet},
} = Metrics;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: '#fff',
  },
  flatList: {
    width: '80%',
    alignSelf: 'center',
  },
  contentContainerStyle: {
    gap: 10,
    padding: 10,
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
    width: isTablet ? '50%' : isWeb ? '25%' : '90%',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
  },
  textContainer: {
    padding: '2%',
  },
  title: {
    fontWeight: '700',
    color: 'black',
    fontSize: 18,
    marginBottom: '1%',
  },
  brand: {
    fontWeight: '500',
    color: 'purple',
    fontSize: 16,
    marginBottom: '1%', // 1% of the screen's width
  },
  description: {
    fontSize: 14,
    marginBottom: '1%',
    fontWeight: '500',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});

export default styles;
