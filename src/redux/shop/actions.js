import {
  GET_ITEMS,
  CURRENT_ITEM,
  GET_PRICE,
  FILTER_ITEMS,
  TOGGLE_DIALOG,
} from './constants';
import agent from '../agent';
//Получение инвентаря
export const getItems = () => ({
  type: GET_ITEMS,
  payload: agent.Items.getAll(),
});
//Изменение предмета для вывода доп инфы и добавления в корзину
export const changeCurrentItem = (item) => ({
  type: CURRENT_ITEM,
  payload: item,
});
//Получения цены
export const getPrice = (item) => ({
  type: GET_PRICE,
  payload: agent.Items.getItemInfo(item),
});
//Фильтры предметов
export const filterItems = (filter) => ({
  type: FILTER_ITEMS,
  payload: filter,
});
//Открытие диолога
export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
});
