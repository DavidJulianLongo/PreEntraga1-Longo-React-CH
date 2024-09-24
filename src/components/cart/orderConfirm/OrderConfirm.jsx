import { useContext } from "react";
import { CartContext } from '../../../context/CartContext';
import './OrderConfirm.css';

export const OrderConfirm = () => {
    const [, setCart, , , , , orderDetails, setOrderDetails] = useContext(CartContext);

    const handleClose = () => {
        setOrderDetails(null);
        setCart([]);

    };

    const totalAmount = orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <div className='order-confirm'>
                {orderDetails ? (
                    <div className='order-details'>
                        <h2>¡Gracias por tu compra!</h2>
                        <div className='order-details-info'>
                            <h3>Orden de compra:</h3>
                            <p className='order-id'>ID de la Orden: {orderDetails.id}</p>
                            <p className='buyer-info'>Nombre: {orderDetails.buyer.userName} {orderDetails.buyer.userLastName}</p>
                            <p className='buyer-info'>Email: {orderDetails.buyer.userEmail}</p>
                            <p className='buyer-info'>Teléfono: {orderDetails.buyer.userPhone}</p>
                        </div>
                        <h3>Detalles de los productos:</h3>
                        <table className='order-table'>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className='product-info'>
                                            <img src={item.image} alt='imagen del producto' className='prod-image' />{item.title} - {item.color}
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price.toLocaleString('es-ES')}</td>
                                        <td>${(item.price * item.quantity).toLocaleString('es-ES')}</td>
                                    </tr>
                                ))}
                                <tr className='total-row'>
                                    <td colSpan='3' className='total-label'>Total</td>
                                    <td>${totalAmount.toLocaleString('es-ES')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className='close-btn' onClick={handleClose}>Cerrar</button>
                        </div>

                    </div>
                ) : (
                    <p>No hay ninguna orden disponible.</p>
                )}
            </div>
        </>
    );
};