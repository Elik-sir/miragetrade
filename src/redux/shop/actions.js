import { GET_ITEMS, CURRENT_ITEM } from './constants';
import agent from '../agent';
export const getItems = () => ({
  type: GET_ITEMS,
  payload: agent.Items.getAll(),
});
export const changeCurrentItem = item => ({
  type: CURRENT_ITEM,
  payload: agent.Items.getItemInfo(item),
});
