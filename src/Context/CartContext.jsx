import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (prod) =>{
        setCart([...cart, prod]);
    }

    return(
        <>
            <CartContext.Provider value= {[cart, setCart, addItem]}> 
                {children}
            </CartContext.Provider>
        </>
    );
} 

