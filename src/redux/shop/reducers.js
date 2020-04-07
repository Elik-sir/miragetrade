import { GET_ITEMS, CURRENT_ITEM } from './constants';
import { ASYNC_START, ASYNC_END } from '../constants';
const initial_state = {
  items: [],
  currentItem: '',
  isLoading: false,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      if (action.error) {
        return { ...state, error: action.error, errorMessage: action.payload };
      }
      return { ...state, items: action.payload };
    case ASYNC_START:
      if (action.subtype === GET_ITEMS || CURRENT_ITEM) {
        return { ...state, isLoading: true };
      }
      return { ...state };
    case ASYNC_END:
      if (action.subtype === GET_ITEMS || CURRENT_ITEM) {
        return { ...state, isLoading: false };
      }
      return { ...state };
    case CURRENT_ITEM:
      if (action.error) {
        return { ...state, error: action.error, errorMessage: action.payload };
      }
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
