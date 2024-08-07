import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching items
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
