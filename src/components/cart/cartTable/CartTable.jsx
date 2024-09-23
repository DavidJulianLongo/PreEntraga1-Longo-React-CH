import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { MdDelete } from 'react-icons/md';
import './CartTable.css';


export const CartTable = () =>{
    const [cart, , , , removeItem] = useContext(CartContext);

    const handleRemove = (item) =>{
        removeItem(item.id, item.color);
    }

    return(
        <>
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
                                    <p>{item.title} - {item.color}</p>
                                </td>
                                <td>$ {parseFloat(item.price).toLocaleString('es-ES')}</td>
                                <td>{item.quantity}</td>
                                <td>$ {(item.price * item.quantity).toLocaleString('es-ES')}</td>
                                <td>
                                    <button className="remove-btn" onClick={() => handleRemove(item)}><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};