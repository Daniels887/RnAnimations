import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import FabButton from './src/components/FabButton';

export default function App() {
  const animation = new Animated.Value(0);

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }),
    {
      iterations: 5,
    },
  ).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {justifyContent: 'center', alignItems: 'center', marginTop: 50},
          rotation,
        ]}>
        <Text>Hello</Text>
      </Animated.View>
      <FabButton style={{bottom: 100, right: 60}} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
