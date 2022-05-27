import * as actions from "./actions/actions";

const answerReducer = (state = "", action) => {
  switch (action.type) {
    case actions.ADDPOINTS:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default answerReducer;
