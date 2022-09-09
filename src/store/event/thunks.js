import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/slice";
import { setAllEvents } from "./slice";
import { tokenStillValid } from "../user/slice";
// F2 - GET all events incl. corresponding category
export const fetchAllEvents = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/events`);
    dispatch(setAllEvents(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};

// F5: User can specify participation (present=true, absent=false)
export const updateParticipation =
  (eventId, participation) => async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      dispatch(appLoading());

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

      dispatch(tokenStillValid({ user: response.data }));

      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
