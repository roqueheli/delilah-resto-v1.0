import { useState, createContext } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isProduct, setIsProduct] = useState(false);
    const [isCodeSent, setCodeSent] = useState(false);

    return (
        <MainContext.Provider value={ { isLogin, setIsLogin, isCart, setIsCart, isProduct, setIsProduct, isCodeSent, setCodeSent } }>
          {children}
        </MainContext.Provider>
    );
}