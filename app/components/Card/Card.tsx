import {View, Text, Image} from 'react-native';
import React from 'react';
import {useMediaQuery} from 'native-base';
import styles from './styles';

const Card = () => {
  const [isDesktopOrLaptop, isTablet, isMobile, isPortrait] = useMediaQuery([
    {minWidth: 992},
    {minWidth: 768, maxWidth: 991},
    {maxWidth: 767},
    {orientation: 'portrait'},
  ]);
  const cardStyles = styles(isDesktopOrLaptop, isTablet, isMobile, isPortrait);
  return (
    <View style={cardStyles.a}>
      <Image
        style={cardStyles.image}
        source={{
          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
        }}
      />
      <View style={cardStyles.imageDescription}>
        <Text>The Garden City</Text>
        <Text>The Silicon Valley of India.</Text>
        <Text>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
      </View>
    </View>
  );
};

export default Card;
