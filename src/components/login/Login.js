import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';

import LoginForm from './LoginForm';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDG2FwN6_pNoNUOHXjg7RtagOBzacN3p4c',
        authDomain: 'flow-f2753.firebaseapp.com',
        databaseURL: 'https://flow-f2753.firebaseio.com',
        projectId: 'flow-f2753',
        storageBucket: 'flow-f2753.appspot.com',
        messagingSenderId: '301283769667'
      });
    }
    console.log('login props', this.props);
  }
  render() {
    return (
      <View>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Login;
