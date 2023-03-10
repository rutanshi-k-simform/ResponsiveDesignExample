import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {height, moderateScale, horizontalScale, verticalScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flex: 0.2,
  },
  body: {
    backgroundColor: 'white',
    flex: 5,
  },
  footer: {
    backgroundColor: 'grey',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPercentage: {
    backgroundColor: 'grey',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerPercentage: {
    backgroundColor: 'grey',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyPercentage: {
    marginVertical: verticalScale(5),
    backgroundColor: 'white',
    height: '75%',
    // alignItems: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'pink',
    borderRadius: 5,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: moderateScale(3),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginRight: horizontalScale(10),
    width: '80%',
  },
  flatList: {
    width: '90%',
    marginTop: verticalScale(5),
  },
  taskContainer: {
    backgroundColor: 'white',
    paddingVertical: verticalScale(10),
    paddingLeft: horizontalScale(5),
    marginBottom: verticalScale(5),
    borderRadius: moderateScale(3),
  },
  font: {color: 'white', fontSize: 18},
});

export default styles;
