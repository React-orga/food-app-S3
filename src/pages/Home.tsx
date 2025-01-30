import { fetchProducts } from "@api/ProductApi";
import ProductCard from "@components/molecules/ProductCard/ProductCard";
import { useAddProduct } from "@hooks/Mutation";
import { useQuery } from "@tanstack/react-query";
import { IProductApiResponse } from "@/types/ProductApi/ProductApiProps"

import { useMemo, useState } from "react";

const Home = () => {
    const [newProduct, setNewProduct] = useState<Partial<IProductApiResponse>>({
        title: "",
        price: 0,
        description: "",
        image: "",
        category: "",
    });

    const { data, isLoading, error } = useQuery<IProductApiResponse[]>({
        queryKey: ["Products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000,
    });

    const addProductMutation = useAddProduct();

    const memoizedProducts = useMemo(() => {
        if (!data) return [];
        return data.map((product: IProductApiResponse) => ({
            ...product,
            title: product.title.toUpperCase(),
        }));
    }, [data]);

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error)
        return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            {/* Formulaire d'ajout de produit */}
            <div className="mb-4 flex flex-wrap gap-2">
                {["title", "price", "description", "image", "category"].map(
                    (field) => (
                        <input
                            key={field}
                            type="text"
                            placeholder={
                                field.charAt(0).toUpperCase() + field.slice(1)
                            }
                            value={String(newProduct[field as keyof typeof newProduct] || '')}
                            onChange={(e) =>
                                setNewProduct((prev) => ({
                                    ...prev,
                                    [field]: e.target.value,
                                }))
                            }
                            className="border p-2"
                        />
                    )
                )}
                <button
                    onClick={() => {
                        if (
                            newProduct?.title &&
                            newProduct?.price &&
                            !isNaN(parseFloat(String(newProduct.price))) &&
                            parseFloat(String(newProduct.price)) > 0
                          ) {
                            addProductMutation.mutate(newProduct);
                          } else {
                            alert("Please fill the title and price fields correctly");
                          }
                    }}
                    className="bg-blue-500 text-white px-4 py-2"
                >
                    Add Product
                </button>
            </div>

            {/* Liste des produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {memoizedProducts.map((product: IProductApiResponse) => (
                    <div key={product.id} className="relative border p-4">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
