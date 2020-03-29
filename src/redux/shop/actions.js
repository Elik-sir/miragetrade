import { GET_ITEMS, CURRENT_ITEM } from "./constants";

export const getItems = items => ({
  type: GET_ITEMS,
  payload: items,
});
export const changeCurrentItem = item => ({
  type: CURRENT_ITEM,
  payload: item,
});
