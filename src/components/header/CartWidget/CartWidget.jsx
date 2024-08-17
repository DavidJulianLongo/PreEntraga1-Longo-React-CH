import "./CartWidget.css";

export const CartWidget = () =>{
    return(
        <>
            <div className="cart-container">
                <img src="/ShoppingCart.svg"  alt="Cart image" />
                <p className="mb-0">2</p>
            </div>
        </>
    );
}