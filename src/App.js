import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayForm from './components/PlayForm';
import PlayList from './components/PlayList';
import Wishlist from './pages/Wishlist';
import SearchBar from './components/SearchBar';
import { getPlays, getWishlist, addToWishlist, removeFromWishlist, addPlay, deletePlay } from './utils/data';

function App() {
  const [plays, setPlays] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPlays, setCurrentPlays] = useState([]);
  const [upcomingPlays, setUpcomingPlays] = useState([]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = () => {
    const allPlays = getPlays();
    console.log('Fetched plays:', allPlays); 
    setPlays(allPlays);
    setCurrentPlays(allPlays.filter((play) => play.types === 'current'));
    setUpcomingPlays(allPlays.filter((play) => play.types === 'upcoming'));
    setWishlist(getWishlist());
  };

  const handleAddPlay = (newPlay) => {
    const createdPlay = addPlay(newPlay);
    setPlays([...plays, createdPlay]);
    if (createdPlay.types === 'current') {
      setCurrentPlays([...currentPlays, createdPlay]);
    } else {
      setUpcomingPlays([...upcomingPlays, createdPlay]);
    }
  };

  const handleDeletePlay = (id) => {
    deletePlay(id);
    setPlays(plays.filter((play) => play.id !== id));
    setCurrentPlays(currentPlays.filter((play) => play.id !== id));
    setUpcomingPlays(upcomingPlays.filter((play) => play.id !== id));
  };

  const handleAddToWishlist = (play) => {
    addToWishlist(play);
    setWishlist([...wishlist, play]);
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    setWishlist(wishlist.filter((play) => play.id !== id));
  };

  const handleSearch = (searchTerm) => {
    const filteredPlays = plays.filter((play) =>
      play.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPlays(filteredPlays);
  };

  return (
    <Router>
      <div>
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={
            <>
              <PlayForm addPlay={handleAddPlay} />
              <PlayList plays={plays} addToWishlist={handleAddToWishlist} deletePlay={handleDeletePlay} />
            </>
          } />
          <Route path="/current-plays" element={
            <PlayList plays={currentPlays} addToWishlist={handleAddToWishlist} deletePlay={handleDeletePlay} />
          } />
          <Route path="/upcoming-plays" element={
            <PlayList plays={upcomingPlays} addToWishlist={handleAddToWishlist} deletePlay={handleDeletePlay} />
          } />
          <Route path="/wishlist" element={
            <Wishlist wishlist={wishlist} removeFromWishlist={handleRemoveFromWishlist} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
