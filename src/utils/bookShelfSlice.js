import { createSlice } from "@reduxjs/toolkit";

const bookShelfSlice = createSlice({
  name: "bookshelf",
  initialState: {
    shelflist: [],
  },
  reducers: {
    addBooks: (state, action) => {
      state.shelflist.push(action.payload);
    },
    clearShelf: (state, action) => {
      state.shelflist.length = 0;
    },
  },
});

export const { addBooks, clearShelf } = bookShelfSlice.actions;
export default bookShelfSlice.reducer;
