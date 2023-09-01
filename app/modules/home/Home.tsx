import {Button, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Flexbox"
        onPress={() => navigation.navigate(ROUTES.flexExample)}
      />
      <Button
        title="Platform"
        onPress={() => navigation.navigate(ROUTES.platformExample)}
      />
      <Button
        title="Percentage"
        onPress={() => navigation.navigate(ROUTES.percentageExample)}
      />
      <Button
        title="Dimensions"
        onPress={() => navigation.navigate(ROUTES.dimensionsExample)}
      />
      <Button
        title="Aspect Ratio"
        onPress={() => navigation.navigate(ROUTES.aspectRatioExample)}
      />
      <Button
        title="Media Query"
        onPress={() => navigation.navigate(ROUTES.mediaQueryExample)}
      />
    </View>
  );
};

export default Home;
