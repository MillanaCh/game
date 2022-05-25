import { configureStore } from "@reduxjs/toolkit";
import Questions from "../Questions";
const store = configureStore({
  reducer: { Questions },
});
export default store;
