import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './scenes/Login';
import Home from './scenes/Home';
import List from './scenes/List';

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        title: 'List'
      }
    },
  }
);

const CreateNavigator = ({ signedIn = false }) => {
  return StackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      AppNavigator: {
        screen: AppNavigator,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'AppNavigator' : 'Login'
    }
  );
}

export default CreateNavigator;