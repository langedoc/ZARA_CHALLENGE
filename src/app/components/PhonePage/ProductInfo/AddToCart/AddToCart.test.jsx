import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import AddToCart from './AddToCart';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('AddToCart Component', () => {
    test('renders button with correct text', () => {
        render(<AddToCart onClick={() => {}} capacity={true} color="red" />);
        const button = screen.getByRole('button', { name: /Add to cart/i });
        expect(button).toBeInTheDocument();
    });

    test('button is enabled when capacity and color are valid', () => {
        render(<AddToCart onClick={() => {}} capacity={true} color="red" />);
        const button = screen.getByRole('button', { name: /Add to cart/i });
        expect(button).toBeEnabled();
    });
});
