import { GET_REVIEWS, GET_COUNT_REVIEWS } from './constant';

export const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews,
});
export const getCountReviews = (count) => ({
  type: GET_COUNT_REVIEWS,
  payload: count,
});
