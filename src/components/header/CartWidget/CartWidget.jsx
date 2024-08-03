import "./CartWidget.css";

export const CartWidget = () =>{
    return(
        <>
            <div className="cart-container">
                <img src="/cart.png"  alt="Cart image" />
                <p className="mb-0">2</p>
            </div>
        </>
    );
}