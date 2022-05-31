import * as actions from "./actions/actions";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = "";

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     loginName:
//   },
// });

const loginReducer = (state = "", action) => {
  switch (action.type) {
    case actions.LOGIN_NAME:
      return action.payload;
    default:
      return state;
  }
};
export default loginReducer;
