import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllPlayers } from "./slice";

// F1: Get all players of the team
export const fetchAllPlayers = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/players`);
    dispatch(setAllPlayers(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
