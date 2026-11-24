import { useState } from "react";
import { Alert } from "react-native";
import { getErrorMessage } from "../../utils/error.utils";

import { authApi } from "../../api";
import AuthContext from "./AuthContext";
import useSecureState from "../../hooks/useSecureState";

export default function AuthProvider({
    children,
}) {
    const [auth, setAuth] = useSecureState("auth", null);

    const register = async (email, password, fullName) => {
        console.log("Registering with email:", email);
        try {
            const result = await authApi.register(email, password, fullName);
            
            console.log("Registration successful:", result);
            
            setAuth(result);
        } catch (error) {
            console.error("Registration failed:", getErrorMessage(error));
            Alert.alert("Registration failed:", getErrorMessage(error));
        }
    };

    const login = async (email, password) => {
        try {
            const result = await authApi.login(email, password);
            console.log("Login successful:", result);
            setAuth(result);
        } catch (error) {
            console.error("Login failed:", getErrorMessage(error));
            Alert.alert("Login failed:", getErrorMessage(error));
        }
    };

    const logout = () => {
        // Logout from supabase 

        setAuth(null);
    };

    const value = {
        auth,
        register,
        login,
        logout,
        isAuthenticated: !!auth 
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
