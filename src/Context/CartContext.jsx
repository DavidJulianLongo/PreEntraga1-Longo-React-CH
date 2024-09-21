import { createContext, useState,useEffect } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Obtiene el carrito del localStorage al iniciar
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guada el carrito en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Verifica si el producto ya existe en el carrito (comparando id y color)
    //Si el producto está en carrito, se actualiza su cantiad, y si no existe lo agrega
    const addItem = (prod, quantity) => {
        const existingProduct = cart.find(item => item.id === prod.id && item.color === prod.color);

        let updatedCart = [];
        if (existingProduct) {
            updatedCart = cart.map((item) => item.id === prod.id && item.color === prod.color ? { ...item, quantity: item.quantity + quantity } : item);
        } else {
            updatedCart = [...cart, { ...prod, quantity }];
        }
        setCart(updatedCart);
        return updatedCart;
    };


    // Calcula el total del carrito y formatea el total con . para mjor lectura
    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total.toLocaleString('es-ES'); 
    };

    // Eliminar un producto del carrito
    const removeItem = (prodId, color) => {
        const updatedCart = cart.map(item => {
            if (item.id === prodId && item.color === color) {
                if (item.quantity > 1) {
                    // Si hay más de un producto, simplemente reduce la cantidad
                    return { ...item, quantity: item.quantity - 1 };
                }
                // Si la cantidad es 1, elimina el producto
                return null;
            }
            return item;
        }).filter(item => item !== null); // Filtra los productos que son null
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={[cart, setCart, addItem, getTotal, removeItem]}>
            {children}
        </CartContext.Provider>
    );
};
