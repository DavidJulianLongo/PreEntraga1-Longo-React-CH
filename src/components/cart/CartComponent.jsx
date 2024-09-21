import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './CartComponent.css';

export const CartComponent = () => {
    const [cart, , , getTotal, removeItem] = useContext(CartContext);

    const handleRemove = (item) =>{
        removeItem(item.id, item.color);
    }

    return (
        <div className="cart-detail-container">
            <div className="cart-table">
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={`${item.id}-${item.color}`}>
                                <td className="product-info">
                                    <img src={item.image} alt={item.title} className="prod-image" />
                                    <div>{item.title} - {item.color}</div>
                                </td>
                                <td>$ {parseFloat(item.price).toLocaleString('es-ES')}</td>
                                <td>{item.quantity}</td>
                                <td>$ {(item.price * item.quantity).toLocaleString('es-ES')}</td>
                                <td>
                                    <button className="remove-btn" onClick={() => handleRemove(item)}><MdDelete style={{ fontSize: '1.5rem', color: 'red' }} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cart-summary">
                <h4>Resumen de la compra</h4>
                <h6>Total:</h6>
                <h5>$ {getTotal()}</h5>
                <p>Los precios anunciados en la Web incluyen el IVA.</p>
                <button className="checkout-btn">Finalizar compra</button>
                <Link to={'/'}>
                    <p className="continue-shopping">Elegir más productos</p>
                </Link>

            </div>
        </div>
    );
};


