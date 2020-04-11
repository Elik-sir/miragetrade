import { GET_ITEMS, CURRENT_ITEM, GET_PRICE } from './constants';
import agent from '../agent';
export const getItems = () => ({
  type: GET_ITEMS,
  payload: agent.Items.getAll(),
});
export const changeCurrentItem = (item) => ({
  type: CURRENT_ITEM,
  payload: item,
});
export const getPrice = (item) => ({
  type: GET_PRICE,
  payload: agent.Items.getItemInfo(item),
});
