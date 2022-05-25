import React from "react";
import { useState, useEffect } from "react";
import * as actions from "./actions/actions"

const initialState = [];
const Questions = (state = initialState, action) => {
  switch (action.type) {
    case actions.DATA:
      return [action.payload];
    default:
      return state;
  }
};
export default Questions;
