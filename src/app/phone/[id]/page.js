'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import { usePhoneDetailsSearch } from '@/context/PhonesDetailsContext';
import Back from '../../components/Back/Back';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Specs from '../../components/Specs/Specs';

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
            <Back />
            <ProductInfo phoneDetails={phoneDetails} />
            <Specs specs={phoneDetails.specs}/>
        </div>
    );
}