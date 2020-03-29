import { combineReducers } from "redux";
import shopReducer from "./shop/reducers";
import userReducer from "./user/reducers";
import cartReducer from "./cart/reducer";

export default combineReducers({
  items: shopReducer,
  user: userReducer,
  cart: cartReducer,
});
