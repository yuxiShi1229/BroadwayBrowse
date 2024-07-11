import React from 'react';
import PlayCard from './PlayCard';

function PlayList({ plays, addToWishlist, deletePlay }) {
  console.log('Plays in PlayList:', plays); 
  return (
    <div>
      {plays.map((play) => (
        <PlayCard 
          key={play.id} 
          play={play} 
          addToWishlist={addToWishlist} 
          removeFromWishlist={() => {}} 
          deletePlay={deletePlay} 
        />
      ))}
    </div>
  );
}

export default PlayList;
