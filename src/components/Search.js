import React from "react";

const Search = ({ search, setIsSearch }) => {
  return (
    <input
      placeholder="What emoji are you looking for ?"
      className="search row-flex-center"
      onChange={(event) => {
        setIsSearch(event.target.value);
      }}
      value={search}
    />
  );
};

export default Search;
