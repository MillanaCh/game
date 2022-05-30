import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../QuestionsSlice";
import loginReducer from "../LoginSlice";
import answerReducer from "../AnswerSlice";
import scoreReducer from "../scoreSlice";
import rightAnswer from "../RightAnswer";
const store = configureStore({
  reducer: {
    data: questionsSlice.reducer,
    login: loginReducer,
    answerCheck: answerReducer,
    rightAnswer: rightAnswer,
    score: scoreReducer,
  },
});
export default store;
