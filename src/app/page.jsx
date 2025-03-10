'use client';

import React from 'react';
import Search from './components/MainPage/Search/Search';
import SmartphoneList from './components/MainPage/SmartphoneList/SmartphoneList';
import styles from './page.module.css';




export default function Home() {
  return (
    <div className={styles.page}>
      <Search />
      <SmartphoneList />
    </div>
  );
}
