import React from "react";

function SearchBar({ handleSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search plays..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
