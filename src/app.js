//import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// import scenes
import Login from './scenes/Login';
import Home from './scenes/Home';

// import navigation
// import CreateNavigator from './Navigation';

// import components
import { Button, Header, Spinner } from './components/common';

// create a component
class App extends Component {
  state = {
    user: 'myuser',
    loggedIn: null
  };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <View style={{ padding: 5, flexDirection: 'row' }}>
            <Button
              onPress={() => firebase.auth().signOut()}
            >
              Log Out
            </Button>
          </View>
        );
      case false:
        return <Login />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

//make this component available to the app
export default App;