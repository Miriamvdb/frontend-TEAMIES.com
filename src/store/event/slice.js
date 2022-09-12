import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: [],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // F2: Get all events with category
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },

    // F7 - Admin can create a new event
    createNewEventSuccess: (state, action) => {
      state.allEvents.push(action.payload);
    },
  },
});

export const { setAllEvents, createNewEventSuccess } = eventSlice.actions;
export default eventSlice.reducer;
