import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {horizontalScale, verticalScale} = Metrics;

const styles = (isDesktopOrLaptop, isTablet, isMobile, isPortrait) =>
  StyleSheet.create({
    a: {
      backgroundColor: 'white',
      borderRadius: 5,
      flexDirection: isDesktopOrLaptop ? 'row' : 'column',
      width: isDesktopOrLaptop
        ? horizontalScale(150)
        : isTablet
        ? horizontalScale(180)
        : horizontalScale(270),
      height: isDesktopOrLaptop ? verticalScale(450) : verticalScale(400),
      overflow: 'hidden',
    },
    image: {
      width: isDesktopOrLaptop ? '40%' : '100%',
      height: isDesktopOrLaptop ? '100%' : '70%',
    },
    imageDescription: {
      flex: 1,
      justifyContent: 'space-around',
      marginLeft: 10,
    },
  });

export default styles;
