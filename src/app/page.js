"use client";

import styles from './page.module.css';
import { usePhones } from './utils/usePhones';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SmartphoneCard from './components/SmartphoneCard/SmartphoneCard';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
}


const Content = () => {
  const { data, isLoading, error } = usePhones();

  if (isLoading) return null;
  if (error) return <div>Error fetching data</div>;

  /* Some of the models in the fetched data are duplicated,
  to avoid showing the same model twice and have problems with keys
  create Set to select unique phone IDs*/
  const uniquePhones = Array.from(new Set(data.map(phone => phone.id)))
    .map(id => data.find(phone => phone.id === id));

  return (
    <div className={styles.page}>
      <div className={styles.cards_container}>
          {uniquePhones.map(phone => (
            <SmartphoneCard key={phone.id} phone={phone}/>
          ))}
      </div>
    </div>
  );
}
