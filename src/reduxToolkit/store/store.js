import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/getAllProducts";
const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
export default store;
