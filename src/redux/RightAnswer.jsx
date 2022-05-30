import * as actions from "./actions/actions";

const rightAnswer = (state = null, action) => {
  switch (action.type) {
    case actions.RIGHTANSWER:
      return [action.payload];
    default:
      return state;
  }
};
export default rightAnswer;
