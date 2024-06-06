import { createSlice } from "@reduxjs/toolkit";
const shelf =
  localStorage.getItem("shelfList") != null
    ? JSON.parse(localStorage.getItem("shelfList"))
    : [];

const bookShelfSlice = createSlice({
  name: "bookshelf",
  initialState: {
    shelflist: shelf,
  },
  reducers: {
    addBooks: (state, action) => {
      state.shelflist.push(action.payload);

      localStorage.setItem(
        "shelfList",
        JSON.stringify(state.shelflist.map((item) => item))
      );
    },
    clearShelf: (state, action) => {
      state.shelflist.length = 0;
    },
  },
});

export const { addBooks, clearShelf } = bookShelfSlice.actions;
export default bookShelfSlice.reducer;
