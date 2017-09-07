import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet
} from 'react-native';

const Card = ({ children, styleContainer = {} }) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },
});

export { Card };