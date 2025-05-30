import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterStateType = {
  counter: number;
  showCounter: boolean;
};

const initialValue: CounterStateType = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment(state, action: PayloadAction<number | undefined>) {
      state.counter += action.payload ?? 1;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
