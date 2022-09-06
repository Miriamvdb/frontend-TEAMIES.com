import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
});

export const {} = eventSlice.actions;
export default eventSlice.reducer;
