import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllCategories } from "./slice";

// F7 - GET all categories
export const fetchAllCategories = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    dispatch(setAllCategories(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
