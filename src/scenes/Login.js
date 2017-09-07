//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';

import LoginForm from '../components/LoginForm';

// create a component
class Login extends Component {
  render() {
    return <LoginForm />;
  }
}

//make this component available to the app
export default Login;