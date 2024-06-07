import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../utils/bookShelfSlice";
import { useSearchParams } from "react-router-dom";

const BookCard = ({ books, location }) => {
  const dispatch = useDispatch();
  const [buttonClick, setButtonClick] = useState(false);
  const handleAdd = (books) => {
    dispatch(addBooks(books));
  };
  return (
    <div className="rounded-lg hover:border-white cursor-pointer shadow-[0_-3px_10px_3px_rgba(0, 0, 0, 0.2)] m-6 p-4 w-[325px] h-[220px] bg-[#ecf0f1] hover:border-[1.5px] hover:border-white">
      <div className="grid grid-cols-12 mb-4">
        <h1 className="col-span-4 font-bold mr-2">Book Title:</h1>
        <h2 className="col-span-8 text-md">{books?.title}</h2>
      </div>
      <div className="flex">
        <h1 className="font-bold mr-2">Edition Count:</h1>
        <h2>{books?.edition_count}</h2>
      </div>

      {location === "/bookshelf" ? (
        <div></div>
      ) : (
        <div className="py-5">
          <button
            disabled={buttonClick}
            className="hover:bg-green-700 bg-green-600 px-6 py-2 rounded-lg text-white ml-12"
            onClick={() => {
              handleAdd(books);
              setButtonClick(true);
            }}
          >
            {buttonClick ? "Book Added" : "Add to Bookshelf"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
