import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export default function CenterView(getStory) {
  return <View style={styles.main}>{getStory()}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});