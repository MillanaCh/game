import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
import loginReducer from "../LoginSlice";
import answerReducer from "../AnswerSlice";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
    login: loginReducer,
    answerCheck: answerReducer,
  },
});
export default store;
