import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '../../components';

const AspectRatioExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Aspect Ratio" />
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Image
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/fE4YShv4sQEZ88ukpel9Z7VMChs=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53623075/link_botw.0.jpg',
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>The Garden City</Text>
          <Text style={styles.description}>
            The Silicon Valley of India. Bengaluru (also called Bangalore) is
            the center of India's high-tech industry. The city is also known for
            its parks and nightlife.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AspectRatioExample;
