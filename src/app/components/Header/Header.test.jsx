import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '../../../context/CartContext';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('renders logo', () => {
    const { getByAltText } = render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
    const logo = getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
