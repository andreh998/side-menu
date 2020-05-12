import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../menu/menu';

import styles from './styles';

export default function Home() {
  return(
    <View style={styles.container}>
      <Menu />
      <View style={styles.home}>
        <Text>Home</Text>
      </View>
    </View>
  )
}