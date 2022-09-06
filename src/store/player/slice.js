import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTeamPlayers: null,
};

export const playerSlice = createSlice({
  name: "teamPlayer",
  initialState,
  reducers: {},
});

export const {} = playerSlice.actions;
export default playerSlice.reducer;
