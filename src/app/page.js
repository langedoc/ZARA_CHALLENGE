'use client';

import React from 'react';
import Search from './components/Search/Search';
import SmartphoneList from './components/SmartphoneList/SmartphoneList';
import styles from './page.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PhonesProvider } from '../context/PhonesContext';


const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PhonesProvider>
        <Content />
      </PhonesProvider>
    </QueryClientProvider>
  );
}

const Content = () => {

  return (
    <div className={styles.page}>
      <Search />
      <SmartphoneList />
    </div>
  );
};
