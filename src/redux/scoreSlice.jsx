import * as actions from "./actions/actions";

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.DELETESCORE:
      return state - action.payload;
    case actions.ADDSCORE:
      return state + action.payload;
    case actions.UPDATESCORE:
      return (state = 0);
    default:
      return state;
  }
};
export default scoreReducer;
