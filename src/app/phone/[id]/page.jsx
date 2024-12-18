'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import { usePhoneDetailsSearch } from '../../../context/PhonesDetailsContext';
import Back from '../../components/Back/Back';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Specs from '../../components/Specs/Specs';
import SimilarItems from '../../components/SimilarItems/SimilarItems';

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

    /* Some of the similar products are duplicated. It filters duplicated products based on their 'id' to ensure
    that SimilarItems component receives only unique products.*/
    const uniqueSimilarProducts = Array.from(new Set(phoneDetails.similarProducts.map(item => item.id)))
        .map(id => phoneDetails.similarProducts.find(item => item.id === id));

    return (
        <>
            <div className={styles.container}>
                <Back />
                <ProductInfo phoneDetails={phoneDetails} />
                <Specs specs={phoneDetails.specs}/>
                <SimilarItems similarItems={uniqueSimilarProducts}/>
            </div>
        </>
    );
}