import React from 'react';
import styles from './Header.module.css';
import CartIcon from '../CartIcon/CartIcon';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/Logo.png" alt="Logo" />
        </a>
      </div>
      <CartIcon />
    </header>
  );
}
