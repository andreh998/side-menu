import {  StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  statusBar: {
    backgroundColor: '#EAEFFF',
    height: Constants.statusBarHeight,
    width: Dimensions.get('window').width,
  },
  
  home: {
    backgroundColor: '#EAEFFF',
    height: 550,
  },  

});