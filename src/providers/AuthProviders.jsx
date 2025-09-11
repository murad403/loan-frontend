import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthProviders = ({children}) => {
    const currentUser = {
        email: "example@example.com",
        name: "murad",
        id: 12,
        pass: 1232
    }
    const [user, setUser] = useState(currentUser);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;