import React from 'react';
import styles from './Back.module.css';
import { SlArrowLeft } from "react-icons/sl";

export default function Back() {
    return (
        <div className={styles.container}>
            <button className={styles.back_button}>
                <SlArrowLeft className={styles.icon} />
                BACK
            </button>
        </div>
    );
}