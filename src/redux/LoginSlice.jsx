import * as actions from "./actions/actions";

const loginReducer = (state = "", action) => {
  switch (action.type) {
    case actions.LOGIN_NAME:
      return action.payload;
    default:
      return state;
  }
};
export default loginReducer;
