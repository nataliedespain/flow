import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import Login from './components/login/Login';
import LoginFail from './components/login/LoginFail';
import Dashboard from './components/dashboard/Dashboard';
import Habits from './components/habits/Habits';
import Habit from './components/habits/Habit';

const Navigator = StackNavigator({
  // Home: { screen: HomeScreen },
  Login: { screen: Login },
  LoginFail: { screen: LoginFail },
  Dashboard: { screen: Dashboard },
  Habits: { screen: Habits },
  Habit: {
    path: 'habits/:name',
    screen: Habit,
  },
});

export default Navigator;
