import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  globalMetrics: {isWeb, isTablet},
} = Metrics;

const styles = (width: number, height: number) =>
  StyleSheet.create({
    loader: {
      height,
    },
    mainContainer: {
      width: width,
      backgroundColor: 'white',
    },
    flatListStyle: {
      width: width - 150,
      alignSelf: 'center',
    },
    contentContainerStyle: {
      gap: 10,
      padding: width / 100,
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
      width: isTablet
        ? (0.98 * width - 150) / 2
        : isWeb
        ? (0.98 * width - 150) / 4
        : 0.98 * width - 150,
      backgroundColor: 'white',
    },
    image: {
      aspectRatio: 1,
      width: isTablet
        ? (0.98 * width - 150) / 2
        : isWeb
        ? (0.98 * width - 150) / 4
        : 0.98 * width - 150,
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: 'black',
      marginBottom: 5,
    },
    brand: {
      fontSize: 14,
      fontWeight: '500',
      color: 'purple',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black',
      marginBottom: 5,
    },
    price: {
      fontSize: 19,
      fontWeight: 'bold',
      color: 'black',
      alignSelf: 'center',
    },
  });

export default styles;
