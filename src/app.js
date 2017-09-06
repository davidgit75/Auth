//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

// create a component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCIkuJ_9kC4XAbsiZwR0AYbLORysrnKGsE",
      authDomain: "auth-rn-254d9.firebaseapp.com",
      databaseURL: "https://auth-rn-254d9.firebaseio.com",
      projectId: "auth-rn-254d9",
      storageBucket: "auth-rn-254d9.appspot.com",
      messagingSenderId: "464341380765"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

//make this component available to the app
export default App;