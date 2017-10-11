import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';

class LoginForm extends Component {
  handleEmail = (text) => {
    this.props.loginActions.emailInput(text);
  }
  handlePw = (text) => {
    this.props.loginActions.pwInput(text);
  }
  handleLogin = () => {
    this.props.loginActions.login(
      this.props.login.email,
      this.props.login.password,
      this.props.navigation
    );
  }
  render() {
    return (
      <View>
        <TextInput
          autoCorrect={false}
          placeholder="Email"
          onChangeText={this.handleEmail}
          value={this.props.login.email}
        />
        <TextInput
          autoCorrect={false}
          placeholder="Password"
          onChangeText={this.handlePw}
          value={this.props.login.password}
          secureTextEntry
        />
        <Button onPress={this.handleLogin} title="Log in" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
