import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (prod, quantity) => {
        const existingProduct = cart.find(item => item.id === prod.id && item.color === prod.color);

        let updatedCart = [];
        if (existingProduct) {
            updatedCart = cart.map(item =>
                item.id === prod.id && item.color === prod.color
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...prod, quantity }];
        }
        setCart(updatedCart);
        return updatedCart; 
    }

    return (
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    );
};
