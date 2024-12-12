import React from "react";
import styles from './SmartphoneCard.module.css';

export default function SmartphoneCard({ phone }) {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <img src={phone.imageUrl} />
            </div>
            <div className={styles.info}>
                <div className={styles.brand}>
                    <p className={styles.brand_name}>{phone.brand}</p>
                    <p className={styles.model}>{phone.name}</p>
                </div>
                <p className={styles.price}>{phone.basePrice} EUR</p>                
            </div>
        </div>
    );
}
