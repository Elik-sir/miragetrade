import { SET_CURRENT_USER } from './constants';

const initial_state = {
  currentUser: null,
};

//На вход приходит объект action. Оператор switch выбирает case по значению action.type и возвращает объект
const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
