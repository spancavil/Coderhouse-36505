import {createContext, useState, useEffect} from 'react';

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState("Estado inicial de A");
    const [estadoB, setEstadoB] = useState("Estado inicial de B");

    const fnDelContext = (a, b) => {
        return (a ** b);
    }

    return (
        <Shop.Provider value = {{
            estadoA, setEstadoA, estadoB, setEstadoB, fnDelContext,
        }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;

