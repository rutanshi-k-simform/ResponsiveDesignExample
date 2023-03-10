import {StyleSheet} from 'react-native';

const styles = (isTablet: boolean, isMobile: boolean, window: any) =>
  StyleSheet.create({
    container: {
      height: window.height,
    },
    header: {
      width: window.width,
      backgroundColor: '#B2D8EC',
      height: 80,
      justifyContent: 'flex-end',
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    box: {
      backgroundColor: '#B2D8EC',
      flexDirection: isMobile ? 'column' : 'row',
      height: isMobile ? 400 : isTablet ? 280 : 300,
      width: isMobile ? 250 : 520,
      borderRadius: 24,
    },
    image: {
      height: isMobile ? '60%' : '100%',
      width: isMobile ? '100%' : '50%',
      borderTopLeftRadius: 24,
      borderBottomLeftRadius: isMobile ? 0 : 24,
      borderTopRightRadius: isMobile ? 24 : 0,
    },
    textContainer: {
      flex: 1,
      paddingBottom: 10,
    },
    title: {
      fontSize: isMobile ? 20 : 24,
      fontWeight: '600',
      color: 'black',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    description: {
      fontSize: isMobile ? 14 : isTablet ? 18 : 16,
      fontWeight: '400',
      alignContent: 'stretch',
      color: 'black',
      marginHorizontal: 10,
    },
  });

export default styles;
