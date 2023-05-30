import { createSlice } from "@reduxjs/toolkit";
import {
  addItem,
  addToFav,
  decrement,
  deleteFav,
  deleteItem,
  increment,
  searchProduct,
  sortProducts,
} from "./utils";

const e_commerce = createSlice({
  name: "E-Commerce",
  initialState: {
    CartItems: [],
    TotalProducts: [],
    Favorite: [],
    __Products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
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
    searchByName: (state, action) => {
      state.TotalProducts = searchProduct(state, action);
    },
    addToFavorite: (state, action) => {
      state.Favorite.push(addToFav(state, action.payload));
    },
    removeFromFavorite: (state, action) => {
      state.Favorite = deleteFav(state, action.payload);
    },
  },
});

export default e_commerce.reducer;
export const {
  loadProducts,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  applyFilters,
  searchByName,
  addToFavorite,
  removeFromFavorite,
} = e_commerce.actions;
