import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';
import { usePhonesSearch } from '../../../context/PhonesContext';
import { IoCloseOutline } from "react-icons/io5";

export default function Search() {
    const { setSearchQuery, uniquePhones } = usePhonesSearch();
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setSearchQuery(query);
        }, 600); // Delay to avoid making too many requests

        return () => clearTimeout(delayDebounceFn);

    }, [query, setSearchQuery]);

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchBar}>
                <input
                    type='text'
                    className={styles.searchInput}
                    placeholder='Search for a smartphone...'
                    value={query}
                    onChange={handleInputChange}
                />
                {query && (
                    <button
                        className={styles.clearButton}
                        onClick={() => setQuery('')}
                    >
                        <IoCloseOutline />
                    </button>
                )}
            </div>
            <div>
                <p className={styles.results}>{uniquePhones.length} RESULTS</p>
            </div>
        </div>
    );
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    result: PropTypes.number.isRequired,
};