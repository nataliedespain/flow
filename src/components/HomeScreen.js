import React from 'react';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={() => navigate('Login')}
        title="Login"
      />
    );
  }
}

export default HomeScreen;
