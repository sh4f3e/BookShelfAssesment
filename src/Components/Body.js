import React, { useRef, useState } from "react";
import BookContainer from "./BookContainer";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHideButton } from "../utils/bookShelfSlice";

const Body = () => {
  const dispatch = useDispatch();
  const handleHideButton = () => {
    dispatch(toggleHideButton());
  };

  const searchText = useRef();
  const [search, setSearch] = useState();
  const handleSearch = () => {
    const inputText = searchText?.current?.value;
    setSearch(inputText);
    console.log(searchText?.current?.value);
  };
  return (
    <div>
      <div className="flex justify-center py-10">
        <input
          ref={searchText}
          type="text"
          placeholder=""
          className="md:w-1/3 w-[21.5rem] border border-gray-600 px-5 h-[45px] rounded-lg mr-2 text-lg"
        ></input>
        <button
          onClick={handleSearch}
          className="bg-green-600 hover:bg-green-700  px-7 py-2 rounded-lg text-white"
        >
          Search
        </button>
      </div>
      <Link to="./bookshelf">
        <button
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white mx-5 my-5"
          onClick={handleHideButton}
        >
          My BookShelf
        </button>
      </Link>
      <div>
        <BookContainer search={search} />
      </div>
    </div>
  );
};

export default Body;
