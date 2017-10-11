import { applyMiddleware, createStore } from 'redux';
import promises from 'redux-promise-middleware';
import logger from 'redux-logger'
import rootReducer from './reducers';

export default(initialState) => {
    return createStore(
      rootReducer,
      applyMiddleware(logger, promises())
    );
}
