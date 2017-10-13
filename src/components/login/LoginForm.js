import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';

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
      this.props.login.password
    ).then(() => this.props.navigation.navigate('Dashboard'))
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Email"
          onChangeText={this.handleEmail}
          value={this.props.login.email}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Password"
          onChangeText={this.handlePw}
          value={this.props.login.password}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    padding: '8%',
    paddingTop: 15,
    paddingBottom: 15
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.blue,
    width: 150,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 50
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700'
  }
});

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
