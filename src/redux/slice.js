import { createSlice } from "@reduxjs/toolkit";
import { addItem, decrement, deleteItem, increment, sortProducts } from "./utils";


const e_commerce = createSlice({
  name: "E-Commerce",
  initialState: {
    CartItems: [],
    TotalProducts: [],
    __Products: [],
  },
  reducers: {
    onWindowLoad: (state, action) => {
      state.TotalProducts = action.payload;
      state.__Products = action.payload;
    },
    addToCart: (state, action) => {
      let item = addItem(state.TotalProducts, state.CartItems, action.payload);
      if (item !== null) {
        state.CartItems.push(item);
      }
    },
    removeFromCart: (state, action) => {
      state.CartItems = deleteItem(state.CartItems, action.payload);
    },
    increaseQuantity: (state, action) => {
      increment(state, action);
    },
    decreaseQuantity: (state, action) => {
      decrement(state, action);
    },
    applyFilters: (state, action) => {
      state.TotalProducts = sortProducts(state, action.payload);
    },
  },
});

export default e_commerce.reducer;
export const {
  onWindowLoad,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  applyFilters,
} = e_commerce.actions;
