import { configureStore } from "@reduxjs/toolkit";

import e_commerce from "./slice";

const store = configureStore({
  reducer: {
    e_commerce,
  },
});

export default store;
