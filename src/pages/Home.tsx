import { fetchProducts } from "@api/ProductApi";
import ProductCard from "@components/molecules/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { IProductApi, IProductApiResponse } from "@types/ProductApi/ProductApiProps";
import { useMemo } from "react";

const Home = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["Products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    // useMemo mémorise les produits pendant 5 minutes (staleTime)
    const memoizedProducts = useMemo(() => {
        if (!data) return [];
        return data.map((product: IProductApiResponse) => ({
            ...product,
            price: `${product.price}€`,
            title: product.title.toUpperCase(),
        }));
    }, [data]);

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error)
        return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {memoizedProducts.map((product: IProductApi) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Home;
