import { createSlice } from "@reduxjs/toolkit";

const e_commerce = createSlice({
  name: "E-Commerce",
  initialState: {
    CartItems: [],
    TotalProducts: [],
  },
  reducers: {
    onWindowLoad: (state, action) => {
      state.TotalProducts = action.payload;
    },
    addToCart: (state, action) => {
      state.CartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.CartItems = action.payload;
    },
    IncreaseQuantity: (state, action) => {
      let itemToUpdate = state.CartItems.find(
        (product) => product.id === action.payload
      );
      itemToUpdate.quantity += 1;
    },
    DecreaseQuantity: (state, action) => {
      let itemToUpdate = state.CartItems.find(
        (product) => product.id === action.payload
      );
      if (itemToUpdate.quantity !== 1) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
});

export default e_commerce.reducer;
export const {
  onWindowLoad,
  addToCart,
  DecreaseQuantity,
  IncreaseQuantity,
  removeFromCart,
} = e_commerce.actions;
