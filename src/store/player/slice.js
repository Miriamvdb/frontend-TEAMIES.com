import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPlayers: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // F1: Get all players of the team
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload;
    },
  },
});

export const { setAllPlayers } = playerSlice.actions;
export default playerSlice.reducer;
