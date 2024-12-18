import React from 'react';
import styles from './Specs.module.css';
import PropTypes from 'prop-types';
import SpecsRow from '../SpecsRow/SpecsRow';

export default function Specs({ specs }) {
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>SPECIFICATIONS</h2>
            <div className={styles.specs}>
                {Object.entries(specs).map(([key, value]) => (
                    <SpecsRow key={key} label={key} data={value} />
                ))}
            </div>
        </div>
    );
}

Specs.propTypes = {
    specs: PropTypes.shape({
        screen: PropTypes.string.isRequired,
        resolution: PropTypes.string.isRequired,
        processor: PropTypes.string.isRequired,
        mainCamera: PropTypes.string.isRequired,
        selfieCamera: PropTypes.string.isRequired,
        battery: PropTypes.string.isRequired,
        os: PropTypes.string.isRequired,
        screenRefreshRate: PropTypes.string.isRequired,
    }).isRequired,
};