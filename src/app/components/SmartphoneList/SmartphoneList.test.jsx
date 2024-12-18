import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmartphoneList from './SmartphoneList';
import { usePhonesSearch } from '../../../context/PhonesContext';

// Mock the usePhonesSearch hook
vi.mock('../../../context/PhonesContext', () => ({
    usePhonesSearch: vi.fn(),
}));

describe('SmartphoneList', () => {
    it('renders correctly', () => {
        usePhonesSearch.mockReturnValue({ uniquePhones: [] });
        const { container } = render(<SmartphoneList />);
        expect(container).toBeInTheDocument();
    });

    it('renders the correct number of card components', () => {
        const mockPhones = [
            { id: 1, imageUrl: 'url1', brand: 'Brand1', name: 'Phone1', basePrice: 100 },
            { id: 2, imageUrl: 'url2', brand: 'Brand2', name: 'Phone2', basePrice: 200 },
        ];
        usePhonesSearch.mockReturnValue({ uniquePhones: mockPhones });
        const { getAllByRole } = render(<SmartphoneList />);
        const cards = getAllByRole('link'); // Assuming SmartphoneCard is wrapped in a Link
        expect(cards).toHaveLength(mockPhones.length);
    });
});
