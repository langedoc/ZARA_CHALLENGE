'use client';

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { usePhoneDetails } from '@/hooks/usePhoneDetails';

const PhonesDetailsContext = createContext();

export const usePhoneDetailsSearch = () => useContext(PhonesDetailsContext);

export const PhonesDetailsProvider = ({ children }) => {
    const [phoneId, setPhoneId] = useState(null);
    const { data, isLoading, error } = usePhoneDetails(phoneId);

    if (isLoading) return null;
    if (error) return <div>Error fetching data</div>;

    const contextValue = {
        phoneId,
        setPhoneId,
        phoneDetails: data,
        isLoading,
        error
    };

    return (
        <PhonesDetailsContext.Provider value={contextValue}>
            {children}
        </PhonesDetailsContext.Provider>
    );
}

PhonesDetailsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};