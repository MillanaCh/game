import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
import loginReducer from "../LoginSlice";
import answerReducer from "../AnswerSlice";
import scoreReducer from "../scoreSlice";
import chhosenAnswer from "../ChoosenItem";
import dataReducer from "../localData";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
    login: loginReducer,
    answerCheck: answerReducer,
    choosenItem: chhosenAnswer,
    score: scoreReducer,
    local: dataReducer,
  },
});
export default store;
