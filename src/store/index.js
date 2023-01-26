import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import bookmarkReducer from "../features/bookmarkSlice";
import articleReducer from "../features/articleSlice";
import homeReducer from "../features/homeSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    bookmark: bookmarkReducer,
    article: articleReducer,
    home: homeReducer,
  },
});
