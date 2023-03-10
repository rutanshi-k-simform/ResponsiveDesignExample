import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {
  height,
  globalMetrics: {isWeb},
} = Metrics;

const styles = StyleSheet.create({
  container: {
    height: isWeb ? height : '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'flex-end',
    backgroundColor: '#B2D8EC',
  },
  body: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#B2D8EC',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default styles;
