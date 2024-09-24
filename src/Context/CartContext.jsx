import { createContext, useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

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

    // Elimina un producto del carrito, si hay más de un mismo producto reduce la cantidad, si la cantidad es 1  elimina el producto
    const removeItem = (prodId, color) => {
        const updatedCart = cart.map(item => {
            if (item.id === prodId && item.color === color) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return null;
            }
            return item;
        }).filter(item => item !== null);
        setCart(updatedCart);
    };

    // Crea una nueva orden de compra 
    const createNewOrder = (order) =>{
        const db = getFirestore();
        const orders = collection(db, 'orders');

        addDoc(orders, order).then((snapshot) => {
            setOrderId(snapshot.id);
            setOrderDetails({ ...order, id: snapshot.id });
        });
    };

    return (
        <>
            <CartContext.Provider value={[cart, setCart, addItem, getTotal, removeItem, createNewOrder,  orderDetails, setOrderDetails]}>
                {children}
            </CartContext.Provider>
        </>
    );
};
