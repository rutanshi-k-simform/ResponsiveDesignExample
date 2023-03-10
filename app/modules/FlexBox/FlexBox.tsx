import {View} from 'react-native';
import React from 'react';
import styles from './styles';

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {flex: 1, backgroundColor: 'lightblue'}]} />
      <View style={[styles.box, {flex: 2, backgroundColor: 'pink'}]} />
      <View style={[styles.box, {flex: 3, backgroundColor: 'orange'}]} />
      {/* <View style={[styles.box, {backgroundColor: 'black'}]} />
      <View style={[styles.box, {backgroundColor: 'brown'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} /> */}
    </View>
  );
};

export default FlexBox;
