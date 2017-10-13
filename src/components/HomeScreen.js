import React from 'react';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Flow',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontSize: 20
    }
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
