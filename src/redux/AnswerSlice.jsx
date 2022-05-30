import * as actions from "./actions/actions";

const answerReducer = (state = null, action) => {
  switch (action.type) {
    case actions.ANSWERCHECK:
      return action.payload;
    default:
      return state;
  }
};
export default answerReducer;
