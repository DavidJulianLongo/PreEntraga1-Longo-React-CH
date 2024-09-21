import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const [cart] = useContext(CartContext);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to={'/:cart'}>
            <div className="cart-container">
                <img src="/ShoppingCart.svg" alt="Cart image" />
                {(totalQuantity != 0) && <p className="mb-0">{totalQuantity}</p>}
            </div>
        </Link>

    );
}