import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, PlaceHolder }) => {
  return (
    <input
      type="text"
      placeholder={`On Type Search ${PlaceHolder}`}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full mb-4"
    />
  );
};

export default SearchBar;
