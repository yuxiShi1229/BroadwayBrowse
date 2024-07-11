import plays from '../db.json';

let wishlist = [];

export const getPlays = () => {
  return plays.plays;
};

export const getWishlist = () => {
  return wishlist;
};

export const addToWishlist = (play) => {
  wishlist.push(play);
};

export const removeFromWishlist = (id) => {
  wishlist = wishlist.filter(play => play.id !== id);
};

export const addPlay = (newPlay) => {
  const nextId = plays.plays.length + 1;
  const updatedPlays = [...plays.plays, { id: nextId, ...newPlay }];
  plays.plays = updatedPlays;
  return { id: nextId, ...newPlay };
};

export const deletePlay = (id) => {
  plays.plays = plays.plays.filter(play => play.id !== id);
};