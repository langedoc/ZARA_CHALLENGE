import React from 'react';
import styles from './AddToCart.module.css';
import PropTypes from 'prop-types';

export default function AddToCart({ onClick, capacity, color }) {

    return (
        <button 
            className={`${styles.add_button} ${capacity && color ? styles.active : ''}`}
            disabled={!capacity || !color}
            aria-label={`Add to cart${!capacity || !color ? ' (disabled)' : ''}`}
            onClick={onClick}
        >
            AÑADIR
        </button>
    );
}

AddToCart.propTypes = {
    onClick: PropTypes.func.isRequired,
    capacity: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
};
