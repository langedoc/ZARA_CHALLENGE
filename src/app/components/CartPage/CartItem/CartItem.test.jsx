import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from './CartItem';

describe('CartItem Component', () => {
    const mockItem = {
        id: '1',
        imageUrl: 'http://example.com/image.jpg',
        name: 'Test Item',
        selectedSpecs: {
            storage: { capacity: '256GB' },
            color: { name: 'Black' },
        },
        price: '999',
    };

    const mockOnRemove = vi.fn();

    test('renders CartItem with correct information', () => {
        render(<CartItem item={mockItem} onRemove={mockOnRemove} />);

        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByText('256GB | Black')).toBeInTheDocument();
        expect(screen.getByText('999 EUR')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', mockItem.imageUrl);
    });

    test('calls onRemove when delete button is clicked', () => {
        render(<CartItem item={mockItem} onRemove={mockOnRemove} />);

        fireEvent.click(screen.getByText('Eliminar'));
        expect(mockOnRemove).toHaveBeenCalledWith(mockItem.id);
    });
});
