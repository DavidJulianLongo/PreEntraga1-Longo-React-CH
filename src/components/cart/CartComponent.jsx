import { CartTable } from './cartTable/CartTable';
import { CartSummary } from './cartSummary/CartSummary';
import './CartComponent.css';


export const CartComponent = () => {
    return (
        <>
            <div className="cart-detail-container">
                <CartTable />
                <CartSummary />
            </div>
        </>

    );
};


