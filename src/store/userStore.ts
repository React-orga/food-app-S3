import { ICookieUser } from "@/types/cookiesUser/cookiesUser";
import Cookies from "js-cookie";
import { create } from "zustand";

interface UserStore {
    user: ICookieUser;
    setUser: (user: ICookieUser) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    getUser: () => ICookieUser;
}

export const useUserStore = create<UserStore>((set) => ({
    user: {} as ICookieUser,
    setUser: (user) => {
        Cookies.set("user", JSON.stringify(user));
        set({ user });
    },
    logout: () => {
        Cookies.remove("user");
        set({ user: {} as ICookieUser });
    },
    isLoggedIn: () => !!Cookies.get("user"),
    getUser: () => {
        const userCookie = Cookies.get("user");
        return userCookie
            ? (JSON.parse(userCookie) as ICookieUser)
            : ({} as ICookieUser);
    },
}));
