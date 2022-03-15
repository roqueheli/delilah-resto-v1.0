import { useState, createContext, useEffect } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isProduct, setIsProduct] = useState(false);
    const [isInit, setInit] = useState(false);
    const [isCodeSent, setCodeSent] = useState(false);
    const [isRegister, setRegister] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState({});

    useEffect(() => {
      setLoading(false);
      (async () => {
        try {
          const rs = await fetch('http://localhost:3001/api/product');
          const data = await rs.json();
          setData(data);
          setLoading(true);
        } catch (e) {
          console.log(e);
        }
      })();
    }, []);

    return (
        <MainContext.Provider value={ { isLogin, setIsLogin, isCart, setIsCart, isProduct, setIsProduct, isCodeSent, setCodeSent, isRegister, setRegister, isInit, setInit, isLoading, setLoading, data, setData, product, setProduct } }>
          {children}
        </MainContext.Provider>
    );
}