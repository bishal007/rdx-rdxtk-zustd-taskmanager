import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});
