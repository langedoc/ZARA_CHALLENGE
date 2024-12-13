'use client';

import React, { useState } from 'react';
import Search from './components/Search/Search';
import SmartphoneList from './components/SmartphoneList/SmartphoneList';
import styles from './page.module.css';
import { usePhones } from './hooks/usePhones';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
}

const Content = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = usePhones(searchQuery);

  if (isLoading) return null;
  if (error) return <div>Error fetching data</div>;

  /* Some of the models in the fetched data are duplicated,
  to avoid showing the same model twice and have problems with keys
  create Set to select unique phone IDs*/
  const uniquePhones = Array.from(new Set(data.map((phone) => phone.id))).map(
    (id) => data.find((phone) => phone.id === id)
  ).slice(0, 20);

  return (
    <div className={styles.page}>
      <Search onSearch={setSearchQuery} />
      <SmartphoneList phones={uniquePhones} />
    </div>
  );
};
