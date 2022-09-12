import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/slice";
import { setAllCategories } from "./slice";

// F7 - GET all categories
export const fetchAllCategories = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/categories`);
    console.log("Response fetchAllCategories", response.data);
    dispatch(setAllCategories(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};
