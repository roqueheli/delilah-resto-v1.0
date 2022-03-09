import { useState, createContext } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MainContext.Provider value={ { isOpen, setIsOpen } }>
          {children}
        </MainContext.Provider>
    );
}