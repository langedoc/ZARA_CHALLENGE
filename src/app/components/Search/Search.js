import React, { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

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