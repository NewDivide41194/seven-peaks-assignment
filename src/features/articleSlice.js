import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    articleObj: undefined,
  },

  reducers: {
    updateArticleObj: (state, action) => {
      state.articleObj = action.payload;
    },
  },
});

export const { updateArticleObj } = articleSlice.actions;

export default articleSlice.reducer;
