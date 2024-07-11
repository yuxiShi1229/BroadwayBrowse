import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar({ handleSearch }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/current-plays">Current Plays</Link>
        </li>
        <li>
          <Link to="/upcoming-plays">Upcoming Plays</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
      <SearchBar handleSearch={handleSearch} />
    </nav>
  );
}

export default Navbar;
