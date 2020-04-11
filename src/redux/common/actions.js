import {
  GET_REVIEWS,
  GET_COUNT_REVIEWS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_USERPROFILE,
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
export const toggleUserProfile = () => ({
  type: TOGGLE_USERPROFILE,
});
