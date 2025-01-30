import App from "@/App";
import * as Pages from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Pages.Home />,
            },
            {
                path: "/cart",
                element: <Pages.Cart />,
            },
            {
                path: "/product/:id",
                element: <Pages.DetailProduct />,
            },
            {
                path: "/all-users",
                element: <Pages.AllUsers />,
            },
            {
                path: "/user/:id",
                element: <Pages.UserDetail />,
            },
            {
                path: "/troll",
                element: <Pages.Troll />,
            },
        ],
    },
]);
