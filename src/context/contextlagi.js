import { createContext, useReducer } from "react";

export const Lagi = createContext();

const initialCounter = {
    resto: null,
};

const reducer = (_, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD":
            return {
                resto: payload,
            };
        default:
            throw new Error();
    }
};

export const LagiProvider = ({ children }) => {
    const [up, setUp] = useReducer(reducer, initialCounter);

    return (
        <Lagi.Provider value={[up, setUp]}>
            {children}
        </Lagi.Provider>
    );
};
