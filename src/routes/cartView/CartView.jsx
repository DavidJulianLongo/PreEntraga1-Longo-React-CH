import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartComponent } from "../../components/cart/CartComponent";
import { Link } from "react-router-dom";
import './CartView.css';

export const CartView = () => {
    const [cart] = useContext(CartContext);

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

    return (
        <>
            <CartComponent />
        </>
    );
};