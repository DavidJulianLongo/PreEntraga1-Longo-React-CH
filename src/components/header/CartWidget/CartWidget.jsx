import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../Context/CartContext";

export const CartWidget = () =>{

    const [cart] = useContext(CartContext);

    return(
        <>
            <div className="cart-container">
                <img src="/ShoppingCart.svg"  alt="Cart image" />
                <p className="mb-0">{cart.length}</p>
            </div>
        </>
    );
}