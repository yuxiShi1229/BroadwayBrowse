import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CurrentPlays from './pages/CurrentPlays';
import UpcomingPlays from './pages/UpcomingPlays';
import Wishlist from './pages/Wishlist';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/current-plays" element={<CurrentPlays />} />
        <Route path="/upcoming-plays" element={<UpcomingPlays />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;