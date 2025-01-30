import { IProductApi } from "@/types/ProductApi/ProductApiProps";
import { create } from "zustand";

interface CartItem extends IProductApi {
    quantity?: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: IProductApi) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    getTotalPrice: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    addItem: (product) =>
        set((state) => {
            const existingItem = state.items.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                            : item
                    ),
                };
            }

            return {
                items: [...state.items, { ...product, quantity: 1 }],
            };
        }),

    removeItem: (productId) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
        })),

    updateQuantity: (productId: number, quantity: number) =>
        set((state) => {
            if (quantity <= 0) {
                return {
                    items: state.items.filter((item) => item.id !== productId),
                };
            }
            return {
                items: state.items.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                ),
            };
        }),

    getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
            (total, item) => total + Number(item.price) * (item.quantity || 0),
            0
        );
    },

    clearCart: () => set({ items: [] }),
}));
