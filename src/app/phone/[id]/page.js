'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import { usePhoneDetailsSearch } from '@/context/PhonesDetailsContext';

export default function PhonePage() {
    const pathname = usePathname();
    const { phoneDetails, setPhoneId } = usePhoneDetailsSearch();

    const id = pathname.split('/').pop();

    React.useEffect(() => {
        if (id) {
            setPhoneId(id);
        }
    }, [id, setPhoneId]);

    if (!phoneDetails) {
        return <div>Loading...</div>;
    };

    return (
        <div className={styles.container}>

            <div key={phoneDetails.id}>
                <h1>{phoneDetails.brand} {phoneDetails.name}</h1>
                <img src={phoneDetails.colorOptions[0].imageUrl} alt={`${phoneDetails.name}, ${phoneDetails.colorOptions[0].name}`} />
                <p>{phoneDetails.description}</p>
                <p>Price: {phoneDetails.basePrice}</p>
            </div>

        </div>
    );
}