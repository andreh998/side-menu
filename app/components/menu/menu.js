import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';

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
          <View style={styles.goBackButton}>
            <TouchableOpacity style={styles.icon} onPress={() => setOpen(!open)}>
              <Feather name="arrow-left" color="#4D51FF" size={26}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.textItem}>Meu perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.textItem}>Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.textItem}>Categorias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.textItem}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.textItem}>Sair</Text>
          </TouchableOpacity>
        </View>
        <AnimatedTouchableOpacity 
          activeOpacity={0}
          style={styles.containerTransparent}
          onPress={() => setOpen(!open)} 
          >     
        </AnimatedTouchableOpacity>
      </Animated.View>
    </View>
  )
}