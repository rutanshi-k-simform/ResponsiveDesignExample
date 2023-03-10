import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '../../components';

const DimensionsExample = () => {
  const {width, height} = useWindowDimensions();
  const dimensionStyles = styles(width, height);

  return (
    <View style={dimensionStyles.container}>
      <View style={dimensionStyles.header}>
        <Header title="Dimensions" />
      </View>
      <View style={dimensionStyles.body}>
        <Text style={dimensionStyles.text}>This is Body</Text>
      </View>
      <View style={dimensionStyles.footer} />
    </View>
  );
};

export default DimensionsExample;
