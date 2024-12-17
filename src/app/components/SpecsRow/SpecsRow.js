import React from 'react';
import PropTypes from 'prop-types';
import styles from '../SpecsRow/SpecsRow.module.css';
export default function SpecsRow({ label, data }) {
    
    return (
        <div className={styles.container}>
            <p className={styles.label}>{label.toUpperCase()}</p>
            <p className={styles.data}>{data}</p>
        </div>
    );
}

SpecsRow.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};