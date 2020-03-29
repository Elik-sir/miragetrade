import { TOOGLE_CART_HIDDEN, ADD_ITEM } from "./constants";
export const toggleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
