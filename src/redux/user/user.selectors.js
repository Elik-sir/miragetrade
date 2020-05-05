import { createSelector } from 'reselect';
//Выбор user из стора
const selectUser = (state) => state.user;
//Возвращение только поля currentUser
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
