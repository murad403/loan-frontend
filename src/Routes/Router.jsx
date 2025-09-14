import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ResetPassword from "../pages/ResetPassword";
import ProfileRoot from "../Layout/ProfileRoot";
import PersonalInformation from "../components/profile/PersonalInformation";
import Security from "../components/profile/Security";
import LoanStatus from "../components/profile/LoanStatus";
import CompleteProfile from "../pages/CompleteProfile";
import ClientDashboard from "../pages/ClientDashboard";


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
            },
            {
                path: "dashboard",
                element: <ClientDashboard></ClientDashboard>
            },
            {
                path: "/profile",
                element: <ProfileRoot></ProfileRoot>,
                children: [
                    {
                        path: "/profile",
                        element: <PersonalInformation></PersonalInformation>
                    },
                    {
                        path: "/profile/security",
                        element: <Security></Security>
                    },
                    {
                        path: "/profile/loan-status",
                        element: <LoanStatus></LoanStatus>
                    }
                ]
            }
        ]
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>
    },
    {
        path: "/sign-in",
        element: <SignIn></SignIn>
    },
    {
        path: "/forgot-password",
        element: <ResetPassword></ResetPassword>
    },
    {
        path: "/complete-profile",
        element: <CompleteProfile></CompleteProfile>
    }
])

export default router;