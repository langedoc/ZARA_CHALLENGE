import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Back from './Back';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
vi.mock('next/navigation', () => ({
    useRouter: vi.fn(),
}));

describe('Back Component', () => {
    const mockBack = vi.fn();
    
    beforeEach(() => {
        useRouter.mockReturnValue({ back: mockBack });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders the Back button', () => {
        const { getByText } = render(<Back />);
        const buttonElement = getByText(/BACK/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls router.back when button is clicked', () => {
        const { getByText } = render(<Back />);
        const buttonElement = getByText(/BACK/i);
        fireEvent.click(buttonElement);
        expect(mockBack).toHaveBeenCalled();
    });
});
