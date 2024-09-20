import './ItemQuantitySelector.css';

export const ItemQuantitySelector = ({ quantity, handleIncrement, handleDecrement }) => {
    return (
        <>
            <div className='quantity-container'>
                <h6>Cantidad:</h6>
                <div className='quantity-controls'>
                    <button onClick={handleDecrement} className='quantity-btn'>-</button>
                    <p className='quantity-value'>{quantity}</p>
                    <button onClick={handleIncrement} className='quantity-btn'>+</button>
                </div>
            </div>
        </>
    )
}