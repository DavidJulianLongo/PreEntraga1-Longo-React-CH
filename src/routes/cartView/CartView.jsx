import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartComponent } from "../../components/cart/CartComponent";
import { Link } from "react-router-dom";
import './CartView.css';
import { OrderConfirm } from "../../components/cart/orderConfirm/OrderConfirm";


export const CartView = () => {
    const [cart, , addItem, , , , orderDetails, , , isOrderConfirmed] = useContext(CartContext);

    // Si no hay productos en el carrito muestra un mensaje con un botón que redirecciona a la HomeView
    if (cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para verlos aquí.</p>
                <Link to="/">
                    <button className="continue-shopping-btn">Continuar comprando</button>
                </Link>
            </div>
        );
    }

    // Si hay detalles de la orden muestra la confirmación
    if (orderDetails) {
        return <OrderConfirm />;
    }

    const handleAddToCart = (product) => {
        if (!isOrderConfirmed) {
            addItem(product, quantity);
        }
    };
    return (
        <>
            <CartComponent />
        </>
    )
};






// export const CartView = () => {
//     const [cart, , , , , orderDetails] = useContext(CartContext);

//     if (cart.length === 0) {
//         return (
//             <div className="empty-cart-container">
//                 <h2>Tu carrito está vacío</h2>
//                 <p>Agrega productos para verlos aquí.</p>
//                 <Link to="/">
//                     <button className="continue-shopping-btn">Continuar comprando</button>
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <>
//             <CartComponent />
//             {/* {orderDetails ? <OrderConfirm /> : <CartComponent />} */}
//             <OrderConfirm />
//         </>
//     );
// };