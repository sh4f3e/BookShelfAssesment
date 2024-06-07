import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { clearShelf, toggleHideButton } from "../utils/bookShelfSlice";

const BookShelf = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleHideButton = () => {
    dispatch(toggleHideButton());
  };
  const handleClearShelf = () => {
    dispatch(clearShelf());
  };
  const books = useSelector((store) => store?.bookShelf?.shelflist);
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/">
          <button
            className="hover:bg-green-700 bg-green-600 px-6 py-2 rounded-lg text-white ml-6 mt-4 "
            onClick={handleHideButton}
          >
            Home
          </button>
        </Link>
        <button
          onClick={handleClearShelf}
          className="hover:bg-red-700 bg-red-600 px-6 py-2 rounded-lg text-white ml-6 mt-4 mr-5"
        >
          Clear BookShelf
        </button>
      </div>
      {books?.length === 0 && (
        <h1 className="text-center font-bold p-4 my-10">
          Bookshelf is empty. Add 📚books to the Bookshelf!
        </h1>
      )}
      <div className="flex flex-wrap ml-14 md:ml-0">
        {books.map((book, index) => (
          <BookCard key={index} books={book} location={location?.pathname} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
