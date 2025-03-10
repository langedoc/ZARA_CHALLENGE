'use client';

import React from 'react';
import Search from './components/MainPage/Search/Search';
import SmartphoneList from './components/MainPage/SmartphoneList/SmartphoneList';
import styles from './page.module.css';
import LoadingBar from './components/LoadingBar/LoadingBar';
import ErrorMessage from './components/ErrorMessage';
import { usePhonesSearch } from '../context/PhonesContext';

export default function Home() {
  const { isLoading, error } = usePhonesSearch();

  if (isLoading) {
    return <LoadingBar />
  }

  if (error) {
      return <ErrorMessage message={error.message} />
  }

  return (
    <div className={styles.page}>
      <Search />
      <SmartphoneList />
    </div>
  );
}
