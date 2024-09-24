import './AddItemButton.css';

export const AddItemButton = ({ handleAddCart, isDisabled }) => {
    const buttonClass = isDisabled ? 'card-btn btn-add-cart disable' : 'card-btn btn-add-cart';

    return (
        <>  
            <button className={buttonClass} onClick={handleAddCart} disabled={isDisabled}>Agregar al carrito</button>
        </>
    );
};