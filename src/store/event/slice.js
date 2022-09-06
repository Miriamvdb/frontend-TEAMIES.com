import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // F2: Get all events with category
    setAllEvents: (state, action) => {
      console.log("From setAllEvents reducer!", action);
    },
  },
});

export const { setAllEvents } = eventSlice.actions;
export default eventSlice.reducer;
