import { IProductApiResponse } from "@/types/ProductApi/ProductApiProps";
import axios from "axios";

export const BASE_URL = "https://fakestoreapi.com/products";

// Récupérer tous les produits
export const fetchProducts = async (): Promise<IProductApiResponse[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
        throw error;
    }
};

// Récupérer un produit par ID
export const fetchProductById = async (id: number): Promise<IProductApiResponse> => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors du chargement du produit ${id}:`, error);
        throw error;
    }
};

// Ajouter un produit (POST)
export const addProduct = async (newProduct: Partial<IProductApiResponse>): Promise<IProductApiResponse> => {
    try {
        // Validation des données avant envoi
        if (!newProduct.title || !newProduct.price) {
            throw new Error("Title and price are required.");
        }

        const response = await axios.post(BASE_URL, {
            title: newProduct.title,
            price: newProduct.price,
            description: newProduct.description || "Default description",
            image: newProduct.image || "https://citygem.app/wp-content/uploads/2024/08/placeholder-1-1.png",
            category: newProduct.category || "Default category",
        });

        console.log("Product added:", response.data); // ✅ Debugging
        return response.data;
    } catch (error: any) {
        console.error("Error adding product:", error.message || error);
        throw error;
    }
};
