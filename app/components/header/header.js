import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles.js';

export default function Header(props) {
  
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.menuOpened()}
      >
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}