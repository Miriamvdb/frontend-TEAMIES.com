import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/slice";
import { setAllEvents } from "./slice";

// F2 - GET all events incl. corresponding category
export const fetchAllEvents = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/events`);
    console.log("Response fetchAllEvents", response.data);
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

      const response = await axios.patch(
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

      console.log("Response updateParticipation thunk", response.data); // only a message: "Participation updated"
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
