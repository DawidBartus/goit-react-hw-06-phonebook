import { tasksReducer } from './tasksSlice';
import { filterReducer } from './filterSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    numbers: tasksReducer,
    filters: filterReducer,
  },
});
