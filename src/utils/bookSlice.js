import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksList: null,
  },
  reducers: {
    addBookList: (state, action) => {
      state.booksList.push(action.payload);
    },
    emptyBook: (state, action) => {
      state.booksList.length = null;
    },
  },
});
export const { addBookList, emptyBook } = bookSlice.actions;
export default bookSlice.reducer;
