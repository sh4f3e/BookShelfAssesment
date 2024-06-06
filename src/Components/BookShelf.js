import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { clearShelf } from "../utils/bookShelfSlice";

const BookShelf = () => {
  const dispatch = useDispatch();
  const handleClearShelf = () => {
    dispatch(clearShelf());
  };
  const books = useSelector((store) => store?.bookShelf?.shelflist);
  console.log(books);
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/">
          <button className="bg-green-600 px-6 py-2 rounded-lg text-white ml-6 mt-4 ">
            Home
          </button>
        </Link>
        <button
          onClick={handleClearShelf}
          className="bg-red-600 px-6 py-2 rounded-lg text-white ml-6 mt-4 mr-5"
        >
          Clear BookShelf
        </button>
      </div>
      <div className="flex flex-wrap">
        {books.map((book, index) => (
          <BookCard key={index} books={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
