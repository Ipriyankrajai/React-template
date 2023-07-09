import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    customIncrement(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, customIncrement } = counterSlice.actions;
export default counterSlice.reducer;
