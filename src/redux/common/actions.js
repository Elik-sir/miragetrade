import {
  GET_REVIEWS,
  GET_COUNT_REVIEWS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_DIALOG,
  TOGGLE_DIALOG_WINDOWPAY,
  TOGGLE_DIALOG_DELETE,
  SET_ALERT,
} from './constant';

export const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews,
});
export const getCountReviews = (count) => ({
  type: GET_COUNT_REVIEWS,
  payload: count,
});
export const changeCurrentPage = (number) => ({
  type: CHANGE_CURRENT_PAGE,
  payload: number,
});
export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
});
export const toggleDialogWindowPay = () => ({
  type: TOGGLE_DIALOG_WINDOWPAY,
});
export const toggleDialogDelete = () => ({
  type: TOGGLE_DIALOG_DELETE,
});
export const setAlert = (alert) => ({
  type: SET_ALERT,
  payload: alert,
});
