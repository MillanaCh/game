import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
import loginReducer from "../LoginSlice";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
    login: loginReducer,
  },
});
export default store;
