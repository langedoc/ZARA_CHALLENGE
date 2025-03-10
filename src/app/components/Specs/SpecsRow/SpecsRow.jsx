import React from 'react';
import PropTypes from 'prop-types';
import styles from '../SpecsRow/SpecsRow.module.css';
export default function SpecsRow({ label, data }) {
    
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <p>{label.toUpperCase()}</p>
            </div>
            <div className={styles.data}>
                <p>{data}</p>
            </div>
        </div>
    );
}

SpecsRow.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};