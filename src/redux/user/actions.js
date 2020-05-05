import { SET_CURRENT_USER } from './constants';
//Установка пользователя
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
