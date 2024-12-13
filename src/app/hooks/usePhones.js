// Since React 19 is used, version 5 of react-quer is requiered
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../api/api';

export const usePhones = (query) => {
  // Starting from vertion 5 useQuery requeres an object instead of separate parameters
  return useQuery({
    // specifies the key for the query
    queryKey: ['phones', query],
    // function that fetches the data
    queryFn: async () => {
      const data = await fetchData(`/products?search=${query.toUpperCase()}`);
      return data;
    },
  });
};
