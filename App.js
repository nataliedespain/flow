import React from 'react';

import { Provider, connect } from 'react-redux';
import Store from './src/store';

import { addNavigationHelpers } from 'react-navigation';
import Navigator from './src/Navigator';

const store = Store();

const App = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({
    dispatch,
    state: nav,
  })}
  />
);

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigation onNavigationStateChange={null} />
  </Provider>
);
