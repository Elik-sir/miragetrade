import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { promiseMiddleware } from './middleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
const loggerMiddleware = createLogger();
//Создание стора
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware, promiseMiddleware),
);
//Создание перстистСтора
export const persistore = persistStore(store);

export default { store, persistore };
