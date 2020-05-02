import {
  GET_REVIEWS,
  GET_COUNT_REVIEWS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_DIALOG,
  TOGGLE_DIALOG_WINDOWPAY,
  TOGGLE_DIALOG_DELETE,
  SET_ALERT,
} from './constant';
import { ASYNC_START, ASYNC_END } from '../constants';

const defaultState = {
  reviews: [],
  countPages: 1,
  isLoading: true,
  currentPage: 1,
  toggleDialog: false,
  toggleWindowPay: false,
  toggleDialogDelete: false,
  alert: { open: false, message: '', severity: '' },
};

const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      if (action.error) {
        return { ...state, error: action.error, errorMessage: action.payload };
      }
      return {
        ...state,
        reviews: action.payload,
      };
    case ASYNC_START:
      if (action.subtype === GET_REVIEWS || GET_COUNT_REVIEWS) {
        return { ...state, isLoading: true };
      }
      return { ...state };
    case ASYNC_END:
      if (action.subtype === GET_REVIEWS || GET_COUNT_REVIEWS) {
        return { ...state, isLoading: false };
      }
      return { ...state };
    case GET_COUNT_REVIEWS:
      return {
        ...state,
        countPages: Math.floor(action.payload / 4) + 1,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case TOGGLE_DIALOG:
      return {
        ...state,
        toggleDialog: !state.toggleDialog,
      };
    case TOGGLE_DIALOG_WINDOWPAY:
      return {
        ...state,
        toggleWindowPay: !state.toggleWindowPay,
      };
    case TOGGLE_DIALOG_DELETE:
      return {
        ...state,
        toggleDialogDelete: !state.toggleDialogDelete,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
