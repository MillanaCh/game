import * as actions from "./actions/actions";

const answerReducer = (state = null, action) => {
  switch (action.type) {
    case actions.ADDPOINTS:
      return [action.payload];
    default:
      return state;
  }
};
export default answerReducer;
