import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInfo.module.css';
import StorageInfo from '../StorageInfo/StorageInfo';

export default function ProductInfo({ phoneDetails }) {
    const [selectedCapacity, setSelectedCapacity] = useState(null);

    const handleCapacityClick = (capacity) => {
        setSelectedCapacity(capacity);
    };

    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img
                    src={phoneDetails.colorOptions[0].imageUrl}
                    alt={`${phoneDetails.name}, ${phoneDetails.colorOptions[0].name}`}
                />
            </div>
            <div className={styles.product_info}>
                <div className={styles.title_price}>
                    <p className={styles.name}>{phoneDetails.name.toUpperCase()}</p>
                    <p className={styles.price}>{phoneDetails.basePrice} EUR</p>
                </div>
                <div className={styles.selectors}>
                    <StorageInfo
                        storageOptions={phoneDetails.storageOptions}
                        handleCapacityClick={handleCapacityClick}
                        selectedCapacity={selectedCapacity}
                    />
                </div>
            </div>
        </div>
    );
}

ProductInfo.propTypes = {
    phoneDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
        storageOptions: PropTypes.arrayOf(PropTypes.shape({
            capacity: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })).isRequired,
        colorOptions: PropTypes.arrayOf(PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};
