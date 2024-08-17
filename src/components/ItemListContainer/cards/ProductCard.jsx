import './ProductCard.css';

export const ProductCard = ({imgSrc, name, price }) => {
    return (
        <>
            <div className="cards">
                <img src={imgSrc} alt="Motorola Edge 50 Fusion" />
                <h4 className="product-title">{name}</h4>
                <div className="colors">
                    <div className="color-dot gray"></div>
                    <div className="color-dot maroon"></div>
                </div>
                <p className="price">$ {price}</p>
                <button className="buy-button">Lo quiero</button>
            </div>
        </>
    );
};