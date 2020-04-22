import {
  GET_ITEMS,
  CURRENT_ITEM,
  GET_PRICE,
  FILTER_ITEMS,
  TOGGLE_DIALOG,
} from './constants';
import { ASYNC_START, ASYNC_END } from '../constants';
const initial_state = {
  items: [],
  currentItem: '',
  sale_price: '',
  isLoadingItems: true,
  isLoadingPrice: true,
  filter: '',
  toggle: false,
  errorPrice: false,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      if (action.error) {
        return { ...state, error: action.error, errorMessage: action.payload };
      }
      return { ...state, items: action.payload };
    case ASYNC_START:
      if (action.subtype === GET_ITEMS) {
        return { ...state, isLoadingItems: true };
      }
      if (action.subtype === GET_PRICE) {
        return { ...state, isLoadingPrice: true };
      }
      return { ...state };
    case ASYNC_END:
      if (action.subtype === GET_ITEMS) {
        return { ...state, isLoadingItems: false };
      }
      if (action.subtype === GET_PRICE) {
        return { ...state, isLoadingPrice: false };
      }
      return { ...state };
    case GET_PRICE:
      if (action.error) {
        return {
          ...state,
          errorPrice: action.error,
          errorMessage: action.payload,
        };
      }
      return {
        ...state,
        sale_price: action.payload,
      };
    case CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filter: action.payload,
      };
    case TOGGLE_DIALOG:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default shopReducer;
