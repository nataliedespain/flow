import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import habitsDates from './habitsDates';
import habits from './habits';

const rootReducer = combineReducers({
  nav,
  login,
  habitsDates,
  habits
});

export default rootReducer;
