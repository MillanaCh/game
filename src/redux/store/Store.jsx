import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
import loginReducer from "../LoginSlice";
import answerReducer from "../AnswerSlice";
import scoreReducer from "../scoreSlice";
import chhosenAnswer from "../ChoosenItem";
import filteredData from "../FilteredDataSlice";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
    filteredData: filteredData,
    login: loginReducer,
    answerCheck: answerReducer,
    choosenItem: chhosenAnswer,
    score: scoreReducer,
  },
});
export default store;
