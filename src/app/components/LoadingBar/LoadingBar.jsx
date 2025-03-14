import React from "react";
import styles from './LoadingBar.module.css';
import PropTypes from 'prop-types';

export default function LoadingBar() {
    
    return (
        <div className={styles.bar_container}>
            <div className={styles.loading_bar} style={{ width: '100%'}} />
        </div>
    );
}

LoadingBar.propTypes = {
    progress: PropTypes.number.isRequired,
};