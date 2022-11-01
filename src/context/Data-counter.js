import { createContext, useReducer } from "react";

export const CounterContext = createContext();

const initialCounter = {
    counter: [],
};

const reducer = (_, action) => {
    const { type, valCounter } = action;

    switch (type) {
        case "ADD":
            return {
                counter: valCounter,
            };
        case "LESS":
            return {
                counter: valCounter,
            };
        default:
            throw new Error();
    }
};

export const CounterContextProvider = ({ children }) => {
    const [dataCounter, setDataCounter] = useReducer(reducer, initialCounter);

    return (
        <CounterContext.Provider value={[dataCounter, setDataCounter]}>
            {children}
        </CounterContext.Provider>
    );
};
