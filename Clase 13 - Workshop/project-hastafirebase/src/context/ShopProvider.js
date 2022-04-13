import { createContext, useState } from 'react';

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    /* const [estadoA, setEstadoA] = useState("Estado inicial de A");
    const [estadoB, setEstadoB] = useState("Estado inicial de B"); */

    /* const fnDelContext = (a, b) => {
        return (a ** b);
    } */

    const [cart, setCart] = useState([]);

    const addCart = (product, quantityToAdd) => {

        const producto = isInCart(product);
        console.log(producto);
        if (producto) {
            producto.quantity += quantityToAdd;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
            //Deberíamos agregar la cantidad al producto existente
        } else {
            //Agregamos un nuevo objeto al carrito
            setCart([...cart, { ...product, quantity: quantityToAdd }]);

        }
    }
    //Función auxiliar que me determina si el producto está o no en el cart
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    const sumaTotal = () => {
        const suma = cart.reduce((acc, item) => acc += (item.price * item.quantity), 0)
        return suma;
    }

    const conteoItems = () => {
        const suma = cart.reduce((acc, item) => acc += (item.quantity), 0)
        return suma;
    }

    const removeItem = (id) => {
        const auxCart = cart.filter(item => item.id !== id);
        setCart(auxCart);
    }

    return (
        <Shop.Provider value={{
            addCart, cart, sumaTotal, removeItem, conteoItems
        }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;

