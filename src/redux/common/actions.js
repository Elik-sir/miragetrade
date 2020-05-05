import {
  GET_REVIEWS,
  GET_COUNT_REVIEWS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_DIALOG,
  TOGGLE_DIALOG_WINDOWPAY,
  TOGGLE_DIALOG_DELETE,
  SET_ALERT,
} from './constant';

//Получение отзывов
export const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews,
});
//Получение количества отзывов
export const getCountReviews = (count) => ({
  type: GET_COUNT_REVIEWS,
  payload: count,
});
//Изменение номера страницы в отзывах
export const changeCurrentPage = (number) => ({
  type: CHANGE_CURRENT_PAGE,
  payload: number,
});
//Открыть/Закрыть профиль
export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
});
//Открыть/закрыть окно оплаты
export const toggleDialogWindowPay = () => ({
  type: TOGGLE_DIALOG_WINDOWPAY,
});
//Открыть закрыть окно подтверждения очистки корзины
export const toggleDialogDelete = () => ({
  type: TOGGLE_DIALOG_DELETE,
});
//Настройка оповещения
export const setAlert = (alert) => ({
  type: SET_ALERT,
  payload: alert,
});
