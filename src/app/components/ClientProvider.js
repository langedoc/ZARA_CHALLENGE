'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';

export default function ClientProvider({ children }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

ClientProvider.propTypes = {
    children: PropTypes.node.isRequired,
};