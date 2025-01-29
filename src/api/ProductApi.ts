import axios from 'axios';
import { IProductApiResponse } from '@types/ProductApi/ProductApiProps';

const BASE_URL = 'https://fakestoreapi.com/';

export const fetchProducts = async (): Promise<IProductApiResponse> => {
  const response = await axios.get(`${BASE_URL}products`);
  return response.data;
};

export const fetchProductById = async (id: number): Promise<IProductApiResponse> => {
  const response = await axios.get(`${BASE_URL}products/${id}`);
  return response.data;
};
