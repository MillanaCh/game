import * as actions from "./actions/actions";

const filteredData = (state = [], action) => {
  switch (action.type) {
    case actions.ADDFILTEREDDATA:
      return action.payload;
    // case actions.MODIFYFILTEREDDATA:
    //   return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};
export default filteredData;
