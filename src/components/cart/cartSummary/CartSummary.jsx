import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartSummary.css';


export const CartSummary = () =>{
    const [ , , , getTotal] = useContext(CartContext);

    return(
        <>
            <div className="cart-summary">
                <h4>Resumen de la compra</h4>
                <h6>Total:</h6>
                <span>$ {getTotal()}</span>
                <p>Los precios anunciados en la Web incluyen el IVA.</p>
                <button className="checkout-btn">Finalizar compra</button>
                <Link to={'/'}>
                    <p className="continue-shopping">Elegir más productos</p>
                </Link>
            </div>
        </>
    );
};