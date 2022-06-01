import * as actions from "./actions/actions";

const dataReducer = (state = "", action) => {
  switch (action.type) {
    case actions.LOCALDATA:
      return [action.payload];
    default:
      return state;
  }
};
export default dataReducer;
