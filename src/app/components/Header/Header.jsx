'use client';

import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useCart } from '../../../context/CartContext';

export default function Header() {
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/Logo.png" alt="Logo" />
        </a>
      </div>
      <div className={styles.cart_container}>
        <Link href={'/cart'} aria-label="cart">
          <LiaShoppingBagSolid className={styles.icon} />
        </Link>
        <span className={styles.item_count}>{cart.length}</span>
      </div>
    </header>
  );
}
