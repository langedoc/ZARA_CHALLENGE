import React from 'react';
import PropTypes from 'prop-types';
import styles from './SmartphoneList.module.css';
import SmartphoneCard from '../SmartphoneCard/SmartphoneCard';
import { usePhonesSearch } from '../../../context/PhonesContext';

export default function SmartphoneList() {
    const { uniquePhones } = usePhonesSearch();

    return (
        <div className={styles.cards_container}>
            {uniquePhones.map((phone) => (
                <SmartphoneCard key={phone.id} phone={phone} />
            )
            )}
        </div>
    );
}

SmartphoneList.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
    })).isRequired,
};
