import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myTeam: [],
};

export const categorySlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    // F2: Get team
    setTeam: (state, action) => {
      state.myTeam = action.payload;
    },
  },
});

export const { setTeam } = categorySlice.actions;
export default categorySlice.reducer;
