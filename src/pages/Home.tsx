import { fetchProducts } from "@api/ProductApi";
import ProductCard from "@components/molecules/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useAddProduct } from "@hooks/Mutation";
import { IProductApiResponse } from "@types/ProductApi/ProductApiProps";

const Home = () => {
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ["Products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000,
    });

    const addProductMutation = useAddProduct();

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
        <div className="container mx-auto p-4">
            {/* Formulaire d'ajout de produit */}
            <div className="mb-4 flex flex-wrap gap-2">
                {["title", "price", "description", "image", "category"].map((field) => (
                    <input
                        key={field}
                        type="text"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={newProduct[field as keyof typeof newProduct]}
                        onChange={(e) =>
                            setNewProduct((prev) => ({ ...prev, [field]: e.target.value }))
                        }
                        className="border p-2"
                    />
                ))}
                <button
                    onClick={() => {
                        if ((newProduct.title && newProduct.price) && newProduct.price.match(/^\d+(\.\d{1,2})?$/)) {
                            addProductMutation.mutate(newProduct);
                        }else {
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
