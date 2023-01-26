import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "article",
  initialState: {
    topStories:null,
    sportData: null,
  },

  reducers: {
    updateTopStories: (state, action) => {
      state.topStories = action.payload;
    },
    updateSportData: (state, action) => {
        state.sportData = action.payload;
      },
  },
});

export const { updateTopStories,updateSportData } = homeSlice.actions;

export default homeSlice.reducer;
