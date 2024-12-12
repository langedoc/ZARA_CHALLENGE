import React from 'react';
import styles from './Header.module.css';
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='/Logo.png' alt='Logo' />
            </div>
            <div className={styles.cart_container}>
                <LiaShoppingBagSolid className={styles.icon}/>
                <span className={styles.item_count}>0</span>
            </div>
        </header>
    );
}