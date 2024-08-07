import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';  // Adjust path if needed

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  // Optionally, you can add middleware or other store enhancers here
});

export default store;
