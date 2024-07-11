import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Wishlist from './pages/Wishlist';

test('renders learn react link', () => {
  render(
    <>
      <App />
      <Wishlist />
    </>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});