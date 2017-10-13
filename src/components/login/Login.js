import React from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, Image } from 'react-native';

import LoginForm from './LoginForm';

class Login extends React.Component {
  static navigationOptions = {
    header: null
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
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image style={{ width: 200, height: 100 }} source={require('../../imgs/flow.png')} />
          </View>
        </View>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    paddingTop: 225,
    paddingBottom: 125
  },
  logo: {
    alignSelf: 'center',
    paddingRight: '10%',
    paddingLeft: '10%',
  }
});

export default Login;
