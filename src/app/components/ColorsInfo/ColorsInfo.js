import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorsInfo.module.css';

export default function ColorsInfo({ colorOptions, handleColorClick, selectedColor }) {
    
    return (
        <div className={styles.colors}>
            <h3>COLOR. PICK YOUR FAVOURITE.</h3>
            <div className={styles.color_options}>
                {colorOptions.map((option) => (
                    <div
                        key={option.name}
                        className={`${styles.color} ${selectedColor === option.name ? styles.active : ''}`}
                        onClick={() => handleColorClick(option.name)}
                    >
                        <div
                            className={styles.color_filled}
                            style={{backgroundColor: `${option.hexCode}`}}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ColorsInfo.propTypes = {
    colorOptions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        hexCode: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    })).isRequired,
    handleColorClick: PropTypes.func.isRequired,
    selectedColor: PropTypes.string.isRequired,
};
