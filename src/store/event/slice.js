import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: [],
  eventDetails: null,
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

    // F5: Amount of (updated) attendees
    updateAttendeesForEvent: (state, action) => {
      const updatedAttendees = action.payload.updatedAttendees;
      const eventId = action.payload.eventId;

      const updatedEvents = state.allEvents.map((event) => {
        if (event.id === eventId) {
          return { ...event, attendees: updatedAttendees };
        } else {
          return event;
        }
      });
      state.allEvents = updatedEvents;
    },

    // F9: Get event details
    setEventDetails: (state, action) => {
      state.eventDetails = action.payload;
    },
  },
});

export const {
  setAllEvents,
  createNewEventSuccess,
  updateAttendeesForEvent,
  setEventDetails,
} = eventSlice.actions;
export default eventSlice.reducer;
