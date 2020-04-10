import { GET_REVIEWS, GET_COUNT_REVIEWS } from './constant';
import { ASYNC_START, ASYNC_END } from '../constants';
const defaultState = {
  reviews: [],
  countPages: 1,
  isLoading: true,
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
    default:
      return state;
  }
};

export default commonReducer;
