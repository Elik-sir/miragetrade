import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/reducers';
import userReducer from './user/reducers';
import cartReducer from './cart/reducer';
import commonReducer from './common/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  items: shopReducer,
  user: userReducer,
  cart: cartReducer,
  common: commonReducer,
});

export default persistReducer(persistConfig, rootReducer);
