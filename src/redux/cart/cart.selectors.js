import { createSelector } from 'reselect';
// Выбор только cart из store
const selectCart = (state) => state.cart;
//Возвращает только cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);
//Возвращает только hidden
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);
//Возвращает количетсво предметов
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    ),
);
//Возвращает Сумму заказа
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.sale_price,
    0,
  ),
);
