import * as actions from "./actions/actions";

const loginReducer = (state = "", action) => {
  switch (action.type) {
    case actions.LOGIN_NAME:
      return state, action.payload;
    case actions.UPDATENAME:
      return "";
    default:
      return state;
  }
};
export default loginReducer;
