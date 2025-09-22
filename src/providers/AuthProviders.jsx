import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthProviders = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    // get current target user from local storage-----------------------------------------
    useEffect( () =>{
        const currentUser = JSON.parse(localStorage.getItem("user"));
        setUser(currentUser);
        setLoading(false);
    }, []);

    // console.log(user);
    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;