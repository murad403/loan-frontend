import { useAuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuthContext();
    const role = user?.role;
    // console.log(user);

    if(loading){
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    if(!user){
        return <Navigate to="/sign-in" />
    }
    if(role !== "admin"){
        return <Navigate to="/profile" />
    }
    return children;

};

export default PrivateRoute;