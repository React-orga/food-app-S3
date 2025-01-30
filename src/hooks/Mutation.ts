import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "@api/ProductApi";
import { IProductApiResponse } from "@types/ProductApi/ProductApiProps";

// ✅ Mutation pour ajouter un produit
export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProduct,
        onSuccess: (newProduct) => {
            queryClient.setQueryData(["Products"], (oldData: IProductApiResponse[] | undefined) => {
                return oldData ? [...oldData, newProduct] : [newProduct];
            });
        },
    });
};

//Todo: Mutation pour modifier un produit
//Todo: Mutation pour supprimer un produit
