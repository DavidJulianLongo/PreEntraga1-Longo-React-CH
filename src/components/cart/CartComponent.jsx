import { CartTable } from './cartTable/CartTable';
import { UserInfo } from './userInfo/UserInfo';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartComponent.css';


export const CartComponent = () => {
    const [cart, , , , , createNewOrder] = useContext(CartContext);

    return (
        <>
            <div>
                <div className='cart-detail-container'>
                    <CartTable />
                </div>
                <div className='checkout'>
                    <UserInfo carrito={cart} createNewOrder={createNewOrder} />
                </div>
            </div>
        </>
    );
};


