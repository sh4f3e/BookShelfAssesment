import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { addBookList } from "../utils/bookSlice";

const BookContainer = ({ search }) => {
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    getBooksList();
  }, [search]);

  const getBooksList = async () => {
    const data = await fetch(
      "https://openlibrary.org/search.json?q=" + search + "&limit=10&page=1"
    );
    const json = await data.json();
    setBookDetails(json?.docs);
  };

  return (
    <div className="flex flex-wrap">
      {bookDetails.map((book, index) => (
        <BookCard key={index} books={book} />
      ))}
    </div>
  );
};

export default BookContainer;
