import { configureStore } from "@reduxjs/toolkit";
import bookShelfSlice from "./bookShelfSlice";
import bookSlice from "./bookSlice";
const appStore = configureStore({
  reducer: {
    bookShelf: bookShelfSlice,
    books: bookSlice,
  },
});
export default appStore;
