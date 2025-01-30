import Typography from "@/components/atoms/Typography/Typography";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import { Navigate } from "react-router-dom";

export default function Cart() {
    const userStore = useUserStore.getState();
    const user = userStore.getUser();

    // Utiliser le hook useCartStore directement pour avoir les mises à jour automatiques
    const items = useCartStore((state) => state.items);
    const totalPrice = useCartStore((state) => state.getTotalPrice());
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);

    const isLoggedIn = userStore.isLoggedIn();

    const handleValidateOrder = () => {
        if (items.length === 0) {
            alert("Vous ne pouvez pas valider une commande vide");
            return;
        }
        alert("Commande validée");
    };

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="px-4 py-8">
            <Typography variant="h2" className="mb-4">
                {user.firstname} {user.lastname} - Récapitulatif de votre panier
            </Typography>
            {/* permettre de cider le panier si il est vide */}
            {items.length > 0 ? (
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="p" className="mb-8 text-gray-600">
                        Vous pouvez modifier la quantité de chaque produit ou
                        bien supprimer un produit de votre panier.
                    </Typography>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => clearCart()}
                    >
                        Vider le panier
                    </button>
                </div>
            ) : (
                <Typography variant="p" className="mb-8 text-gray-600">
                    Votre panier est vide.
                </Typography>
            )}
            <div>
                <Typography variant="h3" className="mb-6">
                    Votre panier :
                </Typography>
                <div className="flex flex-col gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-row justify-between items-center p-4 bg-white rounded-lg shadow"
                        >
                            <div>
                                <Typography
                                    variant="p"
                                    className="font-bold mb-2"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="p"
                                    className="text-gray-600"
                                >
                                    {Number(item.price).toFixed(2)} €
                                </Typography>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            Math.max(
                                                0,
                                                (item.quantity || 0) - 1
                                            )
                                        )
                                    }
                                >
                                    -
                                </button>
                                <Typography
                                    variant="p"
                                    className="w-8 text-center"
                                >
                                    {item.quantity || 0}
                                </Typography>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            (item.quantity || 0) + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <Typography variant="h3">
                        Total : {Number(totalPrice).toFixed(2)} €
                    </Typography>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                        onClick={handleValidateOrder}
                    >
                        Valider la commande
                    </button>
                </div>
            </div>
        </div>
    );
}
