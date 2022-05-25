import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
  },
});
export default store;
