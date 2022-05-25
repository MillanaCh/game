import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];
// fetch Data
export const callTheApi = createAsyncThunk("data/fetchApi", async () => {
  try {
    const response = await axios.get("https://jservice.io/api/clues");
    return response.data;
  } catch (err) {
    console.error("error");
    return [];
  }
});
const questionsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [callTheApi.pending]: (state, action) => {
      return [];
    },
    [callTheApi.fulfilled]: (state, action) => {
      //action and payload is already created in react toolkit
      return action.payload;
    },
    [callTheApi.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = questionsSlice.actions;
export default questionsSlice;
