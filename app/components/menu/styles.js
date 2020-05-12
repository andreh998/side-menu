import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: Dimensions.get('window').height - Constants.statusBarHeight,
    width: Dimensions.get('window').width,
    marginTop: 0,
    zIndex: 1000,
    flexDirection: 'row',
  },

  menu: {
    backgroundColor: '#194D80',
    width: Dimensions.get('window').width - (Dimensions.get('window').width * 0.3),
    height: Dimensions.get('window').height - Constants.statusBarHeight,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  goBackButton: {
    alignItems: 'flex-end'
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: '#EAEFFF',
    borderRadius: 30
  },

  menuItem: {
    marginVertical: 10,
    marginLeft: 20
  },

  textItem: {
    fontSize: 18,
    color: '#EAEFFF',

  },

  containerTransparent: {
    backgroundColor: 'rgba(255,255,255,0)',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height
  },

});