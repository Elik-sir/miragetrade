import { GET_ITEMS, CURRENT_ITEM } from "./constants";
const initial_state = {
  items: [],
  currentItem: "MP9 | Slide (Well-Worn)",
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        currentItem: action.payload[0],
      };
    case CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
