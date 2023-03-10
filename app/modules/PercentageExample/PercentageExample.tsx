import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '../../components';

const PercentageExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Percentage" />
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>This is Body</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default PercentageExample;
