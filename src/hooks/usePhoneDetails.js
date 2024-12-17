// Since React 19 is used, version 5 of react-query is requiered
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../app/api/api';

export const usePhoneDetails = (id) => {
    // Starting from vertion 5 useQuery requeres an object instead of separate parameters
    return useQuery({
        // specifies the key for the query
        queryKey: ['phoneDetails', id],
        // function that fetches the data
        queryFn: async () => {
            if (!id) {
                throw new Error('ID is required');
            }

            const data = await fetchData(`/products/${id}`);
            return data;
        },

        enabled: !!id,// Determines if the query should be executed. If there is no ID, the query will not be executed.
    });
}