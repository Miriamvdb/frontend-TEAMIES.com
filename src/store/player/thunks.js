import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/slice";
import { setAllPlayers } from "./slice";

// F1: Get all players of the team
export const fetchAllPlayers = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/players`);
    // console.log("Response fetchAllPlayers", response.data);
    dispatch(setAllPlayers(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};
