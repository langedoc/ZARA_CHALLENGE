import React from 'react';
import styles from './AddToCart.module.css';
import PropTypes from 'prop-types';

export default function AddToCart({ capacity, color }) {
    return (
        <button 
            className={`${styles.add_button} ${capacity && color ? styles.active : ''}`}
            disabled={!capacity || !color}
            aria-label={`Add to cart${!capacity || !color ? ' (disabled)' : ''}`}
        >
            AÑADIR
        </button>
    );
}

AddToCart.propTypes = {
    capacity: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
};
