import { createSlice, current } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "seven_peaks",
  initialState: {
    orderBy: "newest",
    searchText: "",
    articleObj: undefined,
    bookmark: [],
    searchType: "all",
  },

  reducers: {
    changeText: (state, action) => {
      state.searchText = action.payload;
    },
    changeOrder: (state, action) => {
      state.orderBy = action.payload;
    },
    updateArticleObj: (state, action) => {
      state.articleObj = action.payload;
    },
    addBookMark: (state, action) => {
      state.bookmark.push(action.payload);
    },
    removeBookMark: (state, action) => {
      const index = state.bookmark.findIndex(
        (v) => v.apiUrl === action.payload
      );
      state.bookmark.splice(index, 1);
    },
    changeSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});

export const {
  changeText,
  changeOrder,
  addBookMark,
  updateArticleObj,
  removeBookMark,
  changeSearchType,
} = appSlice.actions;

export default appSlice.reducer;
