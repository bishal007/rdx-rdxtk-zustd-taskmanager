import { ADD_ITEM, SET_ITEMS } from './actions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.item] };
    case SET_ITEMS:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default reducer;
