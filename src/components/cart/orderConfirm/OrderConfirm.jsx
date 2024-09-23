import { useContext } from "react";
import { CartContext } from '../../../context/CartContext';

export const OrderConfirm = () => {
    const [,setCart , , , , , orderDetails, setOrderDetails] = useContext(CartContext); // Asegúrate de que `setOrderDetails` esté disponible

    const handleClose = () => {
        setOrderDetails(null); 
        setCart([]);
        
    };

    return (
        <div>
            {orderDetails ? (
                <div>
                    <h2>¡Gracias por tu compra!</h2>
                    <p>ID de la Orden: {orderDetails.id}</p>
                    <p>Nombre: {orderDetails.buyer.userName} {orderDetails.buyer.userLastName}</p>
                    <p>Email: {orderDetails.buyer.userEmail}</p>
                    <p>Teléfono: {orderDetails.buyer.userPhone}</p>
                    <h3>Detalles de los productos:</h3>
                    <ul>
                        {orderDetails.items.map((item, index) => (
                            <li key={index}>
                             <img src={item.image} alt='imagen del producto' /> - {item.title} - {item.color} - Cantidad: {item.quantity} - Precio: ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                    <button onClick={handleClose}>Cerrar</button>
                </div>
            ) : (
                <p>No hay ninguna orden disponible.</p>
            )}
        </div>
    );
};