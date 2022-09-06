import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTeamPlayers: null,
};

export const teamPlayerSlice = createSlice({
  name: "teamPlayer",
  initialState,
  reducers: {},
});

export const {} = teamPlayerSlice.actions;
export default teamPlayerSlice.reducer;
