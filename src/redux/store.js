import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { promiseMiddleware } from './middleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware, promiseMiddleware),
);
export default store;
