import { useState } from 'react';
import './CardComponent.css';

export const CardComponent = ({ product }) => {
    const { title, price, images } = product;
    const initialColorKey = Object.keys(images)[0];
    const [currentImage, setCurrentImage] = useState(images[initialColorKey].url);

    const handleImageChange = (colorKey) => {
        setCurrentImage(images[colorKey].url);
    };

    return (
        <>
            <div className="product-card">
                <img src={currentImage} alt={title} />
                <h4 className="product-title">{title}</h4>
                <div className="colors">
                    {Object.keys(images).map((colorKey, index) => (
                        <button
                            key={index}
                            style={{ backgroundColor: images[colorKey].color }}
                            className="color-dot"
                            onClick={() => handleImageChange(colorKey)}
                        ></button>
                    ))}
                </div>
                <p className="price">$ {price}</p>
                <button className="card-btn">Ver más</button>
            </div>
        </>

    );
};








// export const ProductCard = ({imgSrc, name, price}) => {

//     return (
//         <>
//             <div className="cards">
//                 <img src={imgSrc} alt="Motorola Edge 50 Fusion" />
//                 <h4 className="product-title">{name}</h4>
//                 <div className="colors">
//                     <button className="color-dot gray"></button>
//                     <button className="color-dot fuzz"></button>
//                 </div>
//                 <p className="price">$ {price}</p>
//                 <button className="buy-button">Lo quiero</button>
//             </div>
//         </>
//     );
// };




