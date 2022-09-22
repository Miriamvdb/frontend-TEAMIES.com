import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },

    // F14: Driver or not
    toggleIsDriver: (state, action) => {
      const eventId = action.payload;
      state.profile.myParticipation = state.profile.myParticipation.map((p) =>
        p.eventId === eventId ? { ...p, isDriver: !p.isDriver } : p
      );
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, toggleIsDriver } =
  userSlice.actions;

export default userSlice.reducer;
