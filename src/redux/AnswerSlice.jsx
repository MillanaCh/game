import * as actions from "./actions/actions";

const answerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ANSWERS:
      return [...state, action.payload];
    case actions.UPDATEANSWERS:
      return state = [];
    default:
      return state;
  }
};
export default answerReducer;
