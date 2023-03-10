import {StyleSheet} from 'react-native';

const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      width,
      height,
    },
    header: {
      width: width,
      height: height * 0.1,
      justifyContent: 'flex-end',
      backgroundColor: '#B2D8EC',
    },
    body: {
      width: width,
      height: height * 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      width: width,
      height: height * 0.1,
      backgroundColor: '#B2D8EC',
    },
    text: {
      fontSize: 20,
    },
  });

export default styles;
