import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function FabButton(props) {
  return <View style={[styles.container, props.style]} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
});
