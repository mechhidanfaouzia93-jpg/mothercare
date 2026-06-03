
/**
 * @type {import("react-router").RouteObject}
 */

import App from "./App";
import { Login } from "./features/auth/Login";
import { Register } from "./features/auth/Register";
import BebePage from "/src/layouts/pages/BebePage";
import Home from "./layouts/pages/Home";
import { NotFound } from "./layouts/pages/NotFound";
import Advices from "/src/layouts/pages/Advices";

import MamanPages from "/src/layouts/pages/MamanPages";
import About from "./layouts/pages/About";
import Faq from "./layouts/pages/Faq";
import { ProtectedPage } from "./features/auth/ProtectedPage";


export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "maman",
                element: <ProtectedPage><MamanPages /></ProtectedPage>
            },
            {
                path: "bebe",
                element: <ProtectedPage><BebePage /></ProtectedPage>

            },
        {
            path: "advices",
            element: <Advices />

        },
            {
                path: "auth",
                children: [
                    {
                        path: "register",
                        element: <Register />
                    },
                    {
                        path: "login",
                        element: <Login />
                    }
                ],
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "Faq",
                element: <Faq />
            },
            
            





            {
                path:"*",
                element: <NotFound />
            }
        ]
    }
]