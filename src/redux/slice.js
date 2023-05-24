import { createSlice } from "@reduxjs/toolkit";

const e_commerce = createSlice({
  name: "E-Commerce",
  initialState: {
    CartItems: [],
    productsList: [],
  },
  reducers: {
    onWindowLoad(state, action) {
      state.productsList = action.payload;
    },
  },
});

export default e_commerce.reducer;
export const { onWindowLoad } = e_commerce.actions;
