import { fetchProducts, addProduct, updateProduct, deleteProduct } from "@api/ProductApi";
import ProductCard from "@components/molecules/ProductCard/ProductCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductApiResponse } from "@types/ProductApi/ProductApiProps";
import { useMemo, useState } from "react";

const Home = () => {
    const queryClient = useQueryClient();
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
    });


    // Récupération des produits
    const { data, isLoading, error } = useQuery({
        queryKey: ["Products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000,
    });

    // Ajouter un produit
    const addProductMutation = useMutation({
        mutationFn: addProduct,
        onSuccess: (newProduct) => {
            queryClient.setQueryData(["Products"], (oldData: IProductApiResponse[] | undefined) => {
                if (!oldData) return [newProduct];
                return [...oldData, newProduct];
            });
        },
        onError: (error) => {
            console.error("Error adding product:", error);
        },
    });

    const memoizedProducts = useMemo(() => {
        if (!data) return [];
        return data.map((product: IProductApiResponse) => ({
            ...product,
            price: `${product.price}€`,
            title: product.title.toUpperCase(),
        }));
    }, [data]);

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div>
            {/* Formulaire d'ajout */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button
                    onClick={() => addProductMutation.mutate(newProduct)}
                    className="bg-blue-500 text-white px-4 py-2"
                >
                    Add Product
                </button>
            </div>


            {/* Liste des produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {memoizedProducts.map((product: IProductApiResponse) => (
                    <div key={product.id} className="relative">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
