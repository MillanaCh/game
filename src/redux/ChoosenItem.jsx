import * as actions from "./actions/actions";

const chhosenAnswer = (state = null, action) => {
  switch (action.type) {
    case actions.CHOOSENITEM:
      return [action.payload];
    default:
      return state;
  }
};
export default chhosenAnswer;
