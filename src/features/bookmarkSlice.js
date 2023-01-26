import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmark: [],
  },

  reducers: {
    addBookmark: (state, action) => {
      state.bookmark.push(action.payload);

    },
    removeBookmark: (state, action) => {
      const index = state.bookmark.findIndex(
        (v) => v.apiUrl === action.payload
      );
      state.bookmark.splice(index, 1);
    }
  },
});

export const {
  addBookmark,
  removeBookmark,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
