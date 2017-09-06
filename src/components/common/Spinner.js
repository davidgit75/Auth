//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

// create a component
const Spinner = ({ size }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

// define your styles
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

//make this component available to the app
export { Spinner };