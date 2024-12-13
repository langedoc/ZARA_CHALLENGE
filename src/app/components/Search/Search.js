import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

export default function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(delayDebounceFn);

    }, [query, onSearch]);

    return (
        <div className={styles.searchWrapper}>
            <input
                type='text'
                className={styles.searchInput}
                placeholder='Search for a smartphone...'
                value={query}
                onChange={handleInputChange}
            />
            <div>
                <p className={styles.results}>RESULTS</p>
            </div>
        </div>
    );
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};