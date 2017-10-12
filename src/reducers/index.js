import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import habitsDates from './habitsDates';
import habits from './habits';
import toggleNewHabit from './toggleNewHabit';

const rootReducer = combineReducers({
  nav,
  login,
  habitsDates,
  habits,
  toggleNewHabit
});

export default rootReducer;
