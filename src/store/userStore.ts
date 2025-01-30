import { ICookieUser } from "@/types/cookiesUser/cookiesUser";
import { IProductApi } from "@/types/ProductApi/ProductApiProps";
import Cookies from "js-cookie";
import { create } from "zustand";
import { useCartStore } from "./cartStore";

interface CartItem extends IProductApi {
    quantity?: number;
}

interface UserStore {
    user: ICookieUser;
    cart: CartItem[];
    setUser: (user: ICookieUser) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    getUser: () => ICookieUser;
}

export const useUserStore = create<UserStore>((set) => ({
    user: {} as ICookieUser,
    cart: [],
    setUser: (user) => {
        Cookies.set("user", JSON.stringify(user));
        set({ user });
    },
    logout: () => {
        Cookies.remove("user");
        set({ user: {} as ICookieUser });
        window.location.reload();
    },
    isLoggedIn: () => !!Cookies.get("user"),
    getUser: () => {
        const userCookie = Cookies.get("user");
        return userCookie
            ? (JSON.parse(userCookie) as ICookieUser)
            : ({} as ICookieUser);
    },
    getCart: () => {
        const cart = useCartStore.getState().items;
        return cart ? (cart as CartItem[]) : ([] as CartItem[]);
    },
}));
