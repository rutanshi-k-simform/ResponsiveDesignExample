import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  globalMetrics: {isWeb},
} = Metrics;

const styles = StyleSheet.create({
  mainContainer: {
    flex: isWeb ? undefined : 1,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
    marginHorizontal: 25,
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
    flex: 1 / 4, // In tablet 1/2 flex and in web 1/4 flex
    backgroundColor: 'white',
  },
  image: {
    aspectRatio: 1,
    flex: 0.75,
  },
  textContainer: {
    padding: 10,
    flex: 0.25,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    flex: 1,
  },
  brand: {
    fontSize: 14,
    fontWeight: '500',
    color: 'purple',
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    flex: 1.68,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    flex: 1.32,
  },
});

export default styles;
