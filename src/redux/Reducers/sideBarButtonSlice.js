// import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  button: 'hola',
};

export const changeButton = createAsyncThunk(
  "changeButton/changeButton",
  (buttonName) => {
    return buttonName
  }
);

const sideBarButtonSlice = createSlice({
  name: "sideBarButton",
  initialState,
  extraReducers: (builder) => {
    //?changeButton
    builder.addCase(changeButton.fulfilled, (state, action) => {
      state.loading = false;
      state.button = action.payload;
      state.error = "";
    });

  },
});

export default sideBarButtonSlice.reducer;
