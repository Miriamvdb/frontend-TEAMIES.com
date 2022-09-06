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
