'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import { usePhoneDetailsSearch } from '../../../context/PhonesDetailsContext';
import Back from '../../components/PhonePage/Back/Back';
import ProductInfo from '../../components/PhonePage/ProductInfo/ProductInfo';
import Specs from '../../components/PhonePage/Specs/Specs';
import SimilarItems from '../../components/PhonePage/SimilarItems/SimilarItems';
import LoadingBar from '../../components/LoadingBar/LoadingBar';

export default function PhonePage() {
    const pathname = usePathname();
    const { isLoading, phoneDetails, setPhoneId } = usePhoneDetailsSearch();

    const id = pathname.split('/').pop();

    React.useEffect(() => {
        if (id) {
            setPhoneId(id);
        }
    }, [id, setPhoneId]);

    if (isLoading || !phoneDetails) {
        return <LoadingBar />;
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