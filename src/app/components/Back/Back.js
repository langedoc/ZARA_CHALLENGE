import React from 'react';
import styles from './Back.module.css';
import { SlArrowLeft } from "react-icons/sl";
import { useRouter } from 'next/navigation';

export default function Back() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className={styles.container}>
            <button onClick={handleBackClick} className={styles.back_button}>
                <SlArrowLeft className={styles.icon} />
                BACK
            </button>
        </div>
    );
}