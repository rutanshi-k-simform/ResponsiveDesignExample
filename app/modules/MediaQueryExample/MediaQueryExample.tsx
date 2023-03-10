import {View, Dimensions, useWindowDimensions, Image, Text} from 'react-native';
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import styles from './styles';
import {Header} from '../../components';

const MediaQueryExample = () => {
  const window = useWindowDimensions();
  const screen = Dimensions.get('screen');

  const device = {
    width: window.width,
    height: window.height,
    deviceWidth: screen.width,
    deviceHeight: screen.height,
    aspectRatio: (window.width / window.height).toString(),
    deviceAspectRatio: (screen.width / screen.height).toString(),
  };

  const isDesktopOrLaptop = useMediaQuery({minWidth: 992}, device);
  const isTablet = useMediaQuery(
    {
      minWidth: 768,
      maxWidth: 991,
    },
    device,
  );
  const isMobile = useMediaQuery(
    {
      maxWidth: 767,
    },
    device,
  );
  const mediaQueryStyles = styles(isTablet, isMobile, window);

  return (
    <View style={mediaQueryStyles.container}>
      <View style={mediaQueryStyles.header}>
        <Header title="MediaQuery" />
      </View>
      <View style={mediaQueryStyles.body}>
        <View style={mediaQueryStyles.box}>
          <Image
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/fE4YShv4sQEZ88ukpel9Z7VMChs=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53623075/link_botw.0.jpg',
            }}
            style={mediaQueryStyles.image}
            resizeMode="cover"
          />
          <View style={mediaQueryStyles.textContainer}>
            <Text style={mediaQueryStyles.title}>The Garden City</Text>
            <Text style={mediaQueryStyles.description}>
              The Silicon Valley of India. Bengaluru (also called Bangalore) is
              the center of India's high-tech industry. The city is also known
              for its parks and nightlife.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MediaQueryExample;
