// Since React 19 is used, version 5 of react-quer is requiered
import { useQuery } from '@tanstack/react-query';
import { fetchData } from './api';

export const usePhones = () => {
  // Starting from vertion 5 useQuery requeres an object instead of separate parameters
  return useQuery({
    // specifies the key for the query
    queryKey: ['phones'],
    // function that fetches the data
    queryFn: async () => {
      const data = await fetchData('/');
      return data.slice(0, 20); // Filter first 20 phones
    },
  });
};
