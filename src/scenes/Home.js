//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ marginTop: 60 }}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigate('List')}>
          <Text>To List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Home;