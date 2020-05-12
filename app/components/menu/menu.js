import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';

import styles from './styles.js';

import Header from '../header/header';

export default function Menu(){
  
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

  const [open, setOpen] = useState(false);
  const [position] = useState(new Animated.Value(0));
  //const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if(open){

      Animated.timing(position, {
        toValue: 0,
        duration: 500,
      }).start();
     

    } else {

      Animated.timing(position, {
        toValue: -Dimensions.get('window').width,
        duration: 500,
      }).start();

    }
    console.log('OPEN: ', open);
    console.log('POSITION: ', position);
  }, [open]);

  return(
    <View>
      <Header menuOpened={() => setOpen(!open)} />
      <Animated.View style={[styles.container, {marginLeft: position}]}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => setOpen(!open)}>
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
        <AnimatedTouchableOpacity 
          activeOpacity={0}
          style={styles.containerTrasnparent}
          onPress={() => setOpen(!open)} 
          >     
        </AnimatedTouchableOpacity>
      </Animated.View>
    </View>
  )
}