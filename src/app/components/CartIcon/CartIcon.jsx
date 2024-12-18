'use client';

import React from 'react';
import Link from 'next/link';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import styles from './CartIcon.module.css';
import { useCart } from '../../../context/CartContext';

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <div className={styles.cart_icon}>
      <Link href={'/cart'} aria-label="cart">
        <LiaShoppingBagSolid className={styles.icon} />
      </Link>
      <span className={styles.item_count}>{cart.length}</span>
    </div>
  );
};

export default CartIcon;
