import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInfo.module.css';
import StorageInfo from '../StorageInfo/StorageInfo';
import ColorsInfo from '../ColorsInfo/ColorsInfo';

export default function ProductInfo({ phoneDetails }) {
    const [selectedCapacity, setSelectedCapacity] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    
    const selectedColorOption = phoneDetails.colorOptions.find(option => option.name === selectedColor);
    const imageUrl = selectedColor ? selectedColorOption.imageUrl : phoneDetails.colorOptions[0].imageUrl; 

    const handleCapacityClick = (capacity) => {
        setSelectedCapacity(capacity);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img
                    src={imageUrl}
                    alt={`${phoneDetails.name}, ${phoneDetails.colorOptions[0].name}`}
                />
            </div>
            <div className={styles.product_info}>
                <div className={styles.title_price}>
                    <h1 className={styles.name}>{phoneDetails.name.toUpperCase()}</h1>
                    <h2 className={styles.price}>{phoneDetails.basePrice} EUR</h2>
                </div>
                <div className={styles.selectors}>
                    <StorageInfo
                        storageOptions={phoneDetails.storageOptions}
                        handleCapacityClick={handleCapacityClick}
                        selectedCapacity={selectedCapacity}
                    />
                    <ColorsInfo
                        colorOptions={phoneDetails.colorOptions}
                        handleColorClick={handleColorClick}
                        selectedColor={selectedColor}
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
