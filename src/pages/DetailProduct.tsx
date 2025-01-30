import { useEffect, useState } from "react";
import Typography from "@/components/atoms/Typography/Typography";
import { useParams } from "react-router-dom";
import { ProductCardDetail } from "@/components/molecules/PoductCardDetail/ProductCardDetail";
import { IProductApi } from "@/types/ProductApi/ProductApiProps";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/ProductApi";

export default function DetailProduct() {
    const { id } = useParams();

    // Vérification et conversion de l'ID en nombre
    const productId = id ? parseInt(id, 10) : null;
    if (isNaN(productId)) {
        return <p>ID invalide !</p>;
    }

    const { data, isLoading, isError, error } = useQuery<IProductApi>({
        queryKey: ["Product", productId], // Utiliser l'ID dans la clé pour que la requête soit dynamique
        queryFn: () => fetchProductById(productId),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    if (isError) {
        return <p>Erreur lors du chargement du produit: {error instanceof Error ? error.message : "Erreur inconnue"}</p>;
    }

    if (!data) {
        return <p>Produit introuvable</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Typography variant="h1">Détail du Produit {data.title}</Typography>
            <ProductCardDetail
                title={data.title}
                price={data.price}
                image={data.image}
                description={data.description}
                category={data.category}
            />
        </div>
    );
}
