import React from 'react';
import PropTypes from 'prop-types';
import styles from './StorageInfo.module.css';


export default function StorageInfo({ storageOptions, handleCapacityClick, selectedCapacity }) {
    return (
        <div className={styles.storage}>
            <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
            <div className={styles.storage_options}>
                {storageOptions.map((option) => (
                    <div
                        key={option.capacity}
                        className={`${styles.capacity} ${selectedCapacity === option.capacity ? styles.active : ''}`}
                        onClick={() => handleCapacityClick(option.capacity)}
                    >
                        <p>{option.capacity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

StorageInfo.propTypes = {
    storageOptions: PropTypes.arrayOf(PropTypes.shape({
        capacity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
    handleCapacityClick: PropTypes.func.isRequired,
    selectedCapacity: PropTypes.string.isRequired,
}