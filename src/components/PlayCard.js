import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
`;

const PlayImage = styled.img`
  width: 100px;
  height: 150px;
  margin-right: 1rem;
`;

const PlayDetails = styled.div`
  flex-grow: 1;
`;

const PlayTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PlayInfo = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#4CAF50' : '#e53935')};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

function PlayCard({ play, addToWishlist, removeFromWishlist, deletePlay }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    console.log('Play data in PlayCard:', play);
  }, [play]);

  const handleAddToWishlist = () => {
    addToWishlist(play);
    setIsInWishlist(true);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(play.id);
    setIsInWishlist(false);
  };

  const handleDelete = () => {
    deletePlay(play.id);
  };

  return (
    <PlayCardWrapper>
      <PlayImage src={process.env.PUBLIC_URL + play.image} alt={play.name} />
      <PlayDetails>
        <PlayTitle>{play.name}</PlayTitle>
        <PlayInfo>Open Date: {play['open date']}</PlayInfo>
        <PlayInfo>Performance Count (as of Jun 30, 2024): {play['performance count(as of Jun 30, 2024)']}</PlayInfo>
        <PlayInfo>Theater: {play.theater}</PlayInfo>
        <PlayInfo>Director: {play['director name']}</PlayInfo>
        <PlayInfo>{play['short description']}</PlayInfo>
      </PlayDetails>
      <ActionButtons>
        {isInWishlist ? (
          <Button primary onClick={handleRemoveFromWishlist}>Remove from Wishlist</Button>
        ) : (
          <Button primary onClick={handleAddToWishlist}>Add to Wishlist</Button>
        )}
        <Button onClick={handleDelete}>X</Button>
      </ActionButtons>
    </PlayCardWrapper>
  );
}

export default PlayCard;
