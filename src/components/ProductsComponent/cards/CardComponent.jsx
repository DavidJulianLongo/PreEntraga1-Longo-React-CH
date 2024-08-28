import './CardComponent.css';
import { useState } from 'react';

export const CardComponent = ({ product }) => {
    const { title, price, images } = product;
    const [currentImage, setCurrentImage] = useState(images[0].url);

    const handleImageChange = (index) => {
        setCurrentImage(images[index].url);
    };

    return (
        <>
            <article className="product-card">
                <img src={currentImage} alt={title} />
                <h4 className="product-title">{title}</h4>
                <div className="colors">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            style={{ backgroundColor: image.color }}
                            className="color-dot"
                            onClick={() => handleImageChange(index)} >
                        </button>
                    ))}
                </div>
                <p className="price">$ {price}</p>
                <button className="card-btn">Ver más</button>
            </article>
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




