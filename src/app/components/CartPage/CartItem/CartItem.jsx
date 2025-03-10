import React from 'react';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

export default function CartItem({ item, onRemove }) {

    return (
        <div className={styles.cart_item}>
            <div className={styles.image_wrapper}>
                <img
                    src={item.imageUrl}
                    alt={`${item.name}, ${item.selectedSpecs.color}`}
                />
            </div>
            <div className={styles.info_delete}>
                <div className={styles.info}>
                    <div className={styles.brand}>
                        <h4>{item.name}</h4>
                        <h4>{item.selectedSpecs.storage.capacity} | {item.selectedSpecs.color.name}</h4>
                    </div>
                    <div className={styles.price}>
                        <h4>{item.price} EUR</h4>
                    </div>
                </div>
                <span onClick={() => onRemove(item.id)} className={styles.detele}>Eliminar</span>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        selectedSpecs: PropTypes.shape({
            storage: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};