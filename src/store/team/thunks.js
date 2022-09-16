import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setTeam } from "./slice";

// F2 - GET all teams
export const fetchTeam = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/teams`);
    dispatch(setTeam(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
