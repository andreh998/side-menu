import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: Dimensions.get('window').height - Constants.statusBarHeight,
    width: Dimensions.get('window').width,
    marginTop: 0,
    flexDirection: 'row',
    zIndex: 1000
  },

  menu: {
    backgroundColor: '#d7d7d7',
    width: Dimensions.get('window').width - (Dimensions.get('window').width * 0.3),
    height: Dimensions.get('window').height - Constants.statusBarHeight,
  },

  menuItem: {
    margin: 10,
    flexDirection: 'row',
  },

  containerTrasnparent: {
    backgroundColor: '#222',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height
  },

});