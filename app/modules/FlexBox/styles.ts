import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {height} = Metrics;

const styles = StyleSheet.create({
  container: {
    height: height,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  box: {
    // height: 200,
    width: 200,
  },
});

export default styles;
