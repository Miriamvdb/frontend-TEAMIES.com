import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/thunks";
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

// F11: As an admin, I can to ACCEPT new registrations, to prevent that everybody can join our team
export const acceptNewPlayer =
  (playerId, accepted) => async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      const patchResponse = await axios.patch(
        `${apiUrl}/players/${playerId}`,
        {
          accepted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Prevent refreshing the page for working participation-buttons
      const response = await axios.get(`${apiUrl}/players`);
      dispatch(setAllPlayers(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Player can join team now!",
          3000
        )
      );
    } catch (e) {
      console.log(e.message);
    }
  };

// F11: As an admin, I can DELETE new registrations, to prevent that everybody can join our team
// F13: Admin can delete existing player
export const deletePlayer = (playerId) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;

    const deleteResponse = await axios.delete(`${apiUrl}/players/${playerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Prevent refreshing the page for working participation-buttons
    const response = await axios.get(`${apiUrl}/players`);
    dispatch(setAllPlayers(response.data));
    dispatch(
      showMessageWithTimeout("success", false, "Player is deleted!", 3000)
    );
  } catch (e) {
    console.log(e.message);
  }
};
