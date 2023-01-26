import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    orderBy: "newest",
    searchText: "",
    searchType: "all",
  },

  reducers: {
    changeText: (state, action) => {
      state.searchText = action.payload;
    },
    changeOrder: (state, action) => {
      state.orderBy = action.payload;
    },
    changeSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const {
  changeText,
  changeOrder,
  changeSearchType,
} = appSlice.actions;

export default appSlice.reducer;
