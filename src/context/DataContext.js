import { createContext, useReducer, useState } from "react";

export const LoginContext = createContext();

const initialState = {
    isLogin: false,
    aslogin: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
};

const reducer = (_, action) => {
    const { type, valemail, valpassword, valLogin, valfullname, valPhone } = action;

    switch (type) {
        case "SUCCESS":
            return {
                isLogin: true,
                aslogin: valLogin,
                fullname: valfullname,
                email: valemail,
                password: valpassword,
                phone: valPhone,
            };
        case "LOGOUT":
            return {
                isLogin: false,
                email: "",
                password: "",
                fullname: "",
                phone: "",
            };
        default:
            throw new Error();
    }
};

export const DataContextProvider = ({ children }) => {
    const [dataLogin, dispatch] = useReducer(reducer, initialState);

    return (
        <LoginContext.Provider value={[dataLogin, dispatch]}>
            {children}
        </LoginContext.Provider>
    );
};
