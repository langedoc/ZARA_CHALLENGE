import React from "react";
import styles from './SmartphoneCard.module.css';

export default function SmartphoneCard({ name }) {
    return (
        <div className={styles.card}>
            <p>{name}</p>
        </div>
    );
}
