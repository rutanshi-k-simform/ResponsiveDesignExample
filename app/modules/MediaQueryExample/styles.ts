import {StyleSheet} from 'react-native';

const styles = (
  isTablet: boolean,
  isMobile: boolean,
  isDesktopOrLaptop: boolean,
  width: number,
) =>
  StyleSheet.create({
    mainContainer: {
      width,
      backgroundColor: 'white',
    },
    flatList: {
      alignSelf: 'center',
      width: '85%',
    },
    contentContainerStyle: {
      rowGap: 10,
      columnGap: 10,
      padding: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
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
      width: isMobile ? 270 : isTablet ? 275 : 290,
      backgroundColor: 'white',
    },
    image: {
      width: isMobile ? 270 : isTablet ? 275 : 290,
      aspectRatio: 1,
    },
    textContainer: {
      padding: 8,
    },
    title: {
      fontSize: isMobile ? 18 : isTablet ? 18 : 16,
      fontWeight: isMobile ? '700' : isTablet ? '600' : '600',
      color: 'black',
      marginBottom: 2,
    },
    brand: {
      fontSize: isMobile ? 14 : isTablet ? 15 : 14,
      fontWeight: isMobile ? '600' : isTablet ? '600' : '500',
      color: 'purple',
      marginBottom: 2,
    },
    description: {
      fontSize: isMobile ? 14 : isTablet ? 15 : 14,
      fontWeight: isMobile ? '600' : isTablet ? '600' : '500',
      color: 'black',
      marginBottom: 2,
    },
    price: {
      fontSize: isMobile ? 18 : isTablet ? 18 : 16,
      fontWeight: isMobile ? '700' : isTablet ? '600' : '600',
      color: 'black',
      marginBottom: 5,
      alignSelf: 'center',
    },
  });

export default styles;
