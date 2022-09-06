import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import playerReducer from "./player/slice";
import eventReducer from "./event/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    player: playerReducer,
    event: eventReducer,
  },
});
