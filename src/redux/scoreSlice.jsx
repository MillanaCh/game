import * as actions from "./actions/actions";

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.DELETESCORE:
      return state - action.payload;
    case actions.ADDSCORE:
      return state + action.payload;
    default:
      return state;
  }
};
export default scoreReducer;
