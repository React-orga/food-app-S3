import { IProductApiResponse } from "@/types/ProductApi/ProductApiProps";
import axios from "axios";

export const BASE_URL = "https://fakestoreapi.com/";

export const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await axios.get(`${BASE_URL}products`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
        throw error;
    }
};

export const fetchProductById = async (id: number): Promise<IProduct> => {
    try {
        const response = await axios.get(`${BASE_URL}products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors du chargement du produit ${id}:`, error);
        throw error;
    }
};
