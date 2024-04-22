import {
  createSlice,
  //  PayloadAction
} from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
