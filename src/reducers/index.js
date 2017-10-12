import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import habitsDates from './habitsDates';
import habits from './habits';
import toggle from './toggle';

const rootReducer = combineReducers({
  nav,
  login,
  habitsDates,
  habits,
  toggle
});

export default rootReducer;
