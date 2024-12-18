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

  test('renders cart icon and item count', () => {
    const { getByRole, getByText } = render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
    const cartIcon = getByRole('link', { name: /cart/i });
    const itemCount = getByText('0');
    expect(cartIcon).toBeInTheDocument();
    expect(itemCount).toBeInTheDocument();
  });
});
