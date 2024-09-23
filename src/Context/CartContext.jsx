import { createContext, useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [orderId, setOrderId] = useState('');

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
                    // Si hay más de un mismo producto, reduce la cantidad 
                    return { ...item, quantity: item.quantity - 1 };
                }
                // Si la cantidad es 1, elimina el producto
                return null;
            }
            return item;
        }).filter(item => item !== null); // Filtra los productos que son null
        setCart(updatedCart);
    };

    // Crea una nueva orden de compra y limpia el carrito
    const createNewOrder = (order) =>{
        const db = getFirestore();
        const orders = collection(db, 'order');

        addDoc(orders, order).then((snapshot) => {
            setOrderId(snapshot.id);
            setCart([]);
        })
    }

    return (
        <>
            <CartContext.Provider value={[cart, setCart, addItem, getTotal, removeItem, createNewOrder]}>
                {children}
            </CartContext.Provider>
        </>

    );
};
