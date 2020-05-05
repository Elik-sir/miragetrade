import {
  TOOGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART,
} from './constants';
//Открытие или закрытие дропдаун корзины
export const toggleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN,
});
//Добавление предмета в корзину
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
//Удаление предмета из корзины
export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
//Убрать позицию из корзины
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
//Очистить корзину
export const clearCart = () => ({
  type: CLEAR_CART,
});
