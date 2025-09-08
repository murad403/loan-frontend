import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/signin",
        element: <SignIn></SignIn>
    }
])

export default router;