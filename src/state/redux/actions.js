export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const setItems = (items) => ({
  type: SET_ITEMS,
  items,
});

export const fetchItems = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  dispatch(setItems(data));
};
