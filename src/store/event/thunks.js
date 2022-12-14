import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  createNewEventSuccess,
  setAllEvents,
  setEventDetails,
  updateAttendeesForEvent,
} from "./slice";
import { tokenStillValid, toggleIsDriver } from "../user/slice";
import { showMessageWithTimeout } from "../appState/thunks";

// F2: GET all events incl. corresponding category
export const fetchAllEvents = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events`);
    dispatch(setAllEvents(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

// F5: User can specify participation (present=true, absent=false)
export const updateParticipation =
  (eventId, participation) => async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      const patchResponse = await axios.patch(
        `${apiUrl}/events/${eventId}/participation`,
        {
          participation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Prevent refreshing the page for working participation-buttons
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // F5: Amount of (updated) attendees
      const updatedAttendees = patchResponse.data.updatedAttendees;
      dispatch(updateAttendeesForEvent({ eventId, updatedAttendees }));

      dispatch(tokenStillValid({ user: response.data }));
    } catch (e) {
      console.log(e.message);
    }
  };

// F7: Admin can create a new event
export const createNewEvent =
  (categoryId, title, date, startTime, endTime, opponent, home, descr) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      const response = await axios.post(
        `${apiUrl}/events/newevent/${categoryId}`,
        {
          title,
          date,
          startTime,
          endTime,
          opponent,
          home,
          descr,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(createNewEventSuccess(response.data.newEvent));
      dispatch(
        showMessageWithTimeout("success", false, "Event created!", 2000)
      );
    } catch (e) {
      console.log(e.message);
    }
  };

// F9: Get event details
export const fetchEventDetails = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    dispatch(setEventDetails(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

// F12: Admin can delete events
export const deleteEvent = (eventId) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;

    const deleteResponse = await axios.delete(`${apiUrl}/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Prevent refreshing the page for working participation-buttons
    const response = await axios.get(`${apiUrl}/events`);
    const response2 = await axios.get(`${apiUrl}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setAllEvents(response.data));
    dispatch(tokenStillValid({ user: response2.data }));
    dispatch(
      showMessageWithTimeout("success", false, "Event is deleted!", 3000)
    );
  } catch (e) {
    console.log(e.message);
  }
};

// F14: Driver or not
export const updateDriver =
  (eventId, isDriver) => async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      const patchResponse = await axios.patch(
        `${apiUrl}/events/${eventId}/drivers`,
        {
          isDriver,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(toggleIsDriver(eventId));
    } catch (e) {
      console.log(e.message);
    }
  };
