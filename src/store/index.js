import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import teamPlayerReducer from "./teamPlayer/slice";
import eventReducer from "./event/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    teamPlayer: teamPlayerReducer,
    event: eventReducer,
  },
});
