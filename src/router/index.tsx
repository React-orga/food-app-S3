import App from "@/App";
import DetailProduct from "@/pages/DetailProduct";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            // {
            //     path: "/cart",
            //     element: <Cart />,
            // },
            {
                path: "/product/:id",
                element: <DetailProduct />,
            },
            // {
            //     path: "/all-users",
            //     element: <AllUsers />,
            // },
            // {
            //     path: "/user/:id",
            //     element: <UserDetail />,
            // },
        ],
    },
]);
