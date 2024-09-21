import './ItemComponent.css';
import { useState} from 'react';
import { Link } from 'react-router-dom';

export const ItemComponent = ({ product }) => {
    const { title, price, images, id } = product;
    const [image, setImage] = useState(images[0].url);

    const handleImageChange = (index) => {
        setImage(images[index].url);
    };

    return (
        <>
            <article className="product-card">
                <img src={image} alt={title} />
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
                <p className="price">$ {parseFloat(price).toLocaleString('es-ES')}</p>
                <Link to={`/item/${id}`}><button className="card-btn">Ver más</button></Link>
            </article>
        </>
    );
};












