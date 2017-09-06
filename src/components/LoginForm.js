//import liraries
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

// create a component
class FormLogin extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFail());
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return (<Spinner size='small' />)
    }
    return (
      <Button
        onPress={() => this.onButtonPress()}
      >
        Log In
      </Button>
    )
  }

  render() {
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

// define your styles
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginTop: 10
  }
};

//make this component available to the app
export default FormLogin;