import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { addBookList } from "../utils/bookSlice";
import { BOOK_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const BookContainer = ({ search }) => {
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    setBookDetails([]);
    getBooksList();
  }, [search]);

  const getBooksList = async () => {
    const data = await fetch(BOOK_API_URL + search + "&limit=10&page=1");
    const json = await data.json();
    setBookDetails(json?.docs);
  };

  return bookDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap ml-14 md:ml-0">
      {bookDetails.map((book, index) => (
        <BookCard key={index} books={book} />
      ))}
    </div>
  );
};

export default BookContainer;
