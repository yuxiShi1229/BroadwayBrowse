import React from 'react';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map(play => (
        <div key={play.id}>
          <h3>{play.name}</h3>
          <button onClick={() => removeFromWishlist(play.id)}>Remove from Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
