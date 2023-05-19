import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PropsWithChildren } from 'react';

interface AuthContextProps {
    login: (token: string, user: any) => void;
    logout: () => void;
    saveUser: (user: any) => void;
    token: string | null;
    user: any;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

type Props = PropsWithChildren;

export const AuthContextProvider = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState(null);

    const login = (token: string, user: any) => {
        setIsLoading(true);
        setToken(token);
        setUser(user);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
        setIsLoading(false);
    }
    const saveUser = (user: any) => {
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }


    const logout = () => {
        setIsLoading(true);
        setToken(null);
        AsyncStorage.removeItem('token');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let token = await AsyncStorage.getItem('token');
            let user = await AsyncStorage.getItem('user');
            setToken(token);
            setUser(JSON.parse(user ?? "{}"));
            setIsLoading(false);
        } catch (error) {
            console.log('isLoggedIn error: $(error)');
        }
    }

    useEffect(() => { setTimeout(() => setIsLoading(false), 2000) });
    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, token, user, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
}