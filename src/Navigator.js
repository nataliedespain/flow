import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import Login from './components/login/Login';
import LoginFail from './components/login/LoginFail';
import Dashboard from './components/dashboard/Dashboard';
import Habits from './components/habits/Habits';

const Navigator = StackNavigator({
  // Home: { screen: HomeScreen },
  // Login: { screen: Login },
  // LoginFail: { screen: LoginFail },
  Dashboard: { screen: Dashboard },
  Habits: { screen: Habits }
});

export default Navigator;
