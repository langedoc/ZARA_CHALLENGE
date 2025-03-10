import React from 'react';
import PropTypes from 'prop-types';
import styles from './SmartphoneCard.module.css';
import { formatPrice } from '../../../utils/formatPrice';

export default function SmartphoneCard({ phone }) {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <img src={phone.imageUrl} alt={`${phone.brand} ${phone.name}`} />
      </div>
      <div className={styles.info}>
        <div className={styles.brand}>
          <p className={styles.brand_name}>{phone.brand}</p>
          <p className={styles.model}>{phone.name}</p>
        </div>
        <p className={styles.price}>
          {formatPrice(phone.basePrice)}
        </p>
      </div>
    </div>
  );
}

SmartphoneCard.propTypes = {
  phone: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
  }).isRequired,
};
