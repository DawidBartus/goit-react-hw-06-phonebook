import { createSlice } from '@reduxjs/toolkit';
import { numberInitialState } from './reducer';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
  name: 'numbers',
  initialState: numberInitialState,
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteNumber(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addNumber, deleteNumber } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
