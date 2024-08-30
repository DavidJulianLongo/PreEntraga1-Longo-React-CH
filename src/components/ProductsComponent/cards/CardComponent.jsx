import './CardComponent.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CardComponent = ({ product }) => {
    const { title, price, images, prodId } = product;
    const [Image, setImage] = useState(() => images[0].url);

    useEffect(() => {
        setImage(images[0].url);
    }, [images]);

    const handleImageChange = (index) => {
        setImage(images[index].url);
    };

    return (
        <>
            <article className="product-card">
                <img src={Image} alt={title} />
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
                <Link to={`/product/${prodId}`}><button className="card-btn">Ver más</button></Link>
            </article>
        </>
    );
};












