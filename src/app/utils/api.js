import axios from 'axios';

const API_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com/products';

const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
});

export const fetchData = async (endpoint) => {
    const response = await apiClient.get(endpoint);
    return response.data;
}