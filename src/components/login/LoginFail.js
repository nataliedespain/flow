import React from 'react';
import { View, Text } from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login Fail'
  };
  render() {
    return (
      <View>
        <Text>Login Failed :(</Text>
      </View>
    );
  }
}

export default Login;
