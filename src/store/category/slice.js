import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // F7: Get all categories
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
  },
});

export const { setAllCategories } = categorySlice.actions;
export default categorySlice.reducer;
