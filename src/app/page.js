'use client';

import React from 'react';
import Search from './components/Search/Search';
import SmartphoneList from './components/SmartphoneList/SmartphoneList';
import styles from './page.module.css';




export default function Home() {
  return (
    <div className={styles.page}>
      <Search />
      <SmartphoneList />
    </div>
  );
}
