//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ padding: 60 }}>
        <Text>List</Text>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Text>To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Home;