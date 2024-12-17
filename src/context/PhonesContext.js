'use client';

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { usePhones } from '../hooks/usePhones';

const PhonesContext = createContext();

export const usePhonesSearch = () => useContext(PhonesContext);

export const PhonesProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading, error } = usePhones(searchQuery);

    if (isLoading) return null;
    if (error) return <div>Error fetching data</div>;

    /* Some of the models in the fetched data are duplicated,
    to avoid showing the same model twice and have problems with keys
    create Set to select unique phone IDs*/
    const uniquePhones = Array.from(new Set(data.map((phone) => phone.id))).map(
        (id) => data.find((phone) => phone.id === id)
    ).slice(0, 20);

    const contextValue = {
        searchQuery,
        setSearchQuery,
        uniquePhones,
        isLoading,
        error
    };

    return (
        <PhonesContext.Provider value={contextValue}>
            {children}
        </PhonesContext.Provider>
    );
}

PhonesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
