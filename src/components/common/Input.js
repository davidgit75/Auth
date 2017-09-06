//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

// create a component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, container, labelStyle } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize='none'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

// define your styles
const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    height: 20,
    width: 100,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

//make this component available to the app
export { Input };