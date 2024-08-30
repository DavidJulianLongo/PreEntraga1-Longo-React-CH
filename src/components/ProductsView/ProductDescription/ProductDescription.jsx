import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDescription.css';

export const ProductDescription = () => {
    const { prodId } = useParams();
    const [product, setProduct] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('/data/cardsProducts.json');
            const data = await response.json();
            const getProduct = data.find(prod => prod.prodId == prodId);
            setProduct(getProduct);
            setImage(getProduct.images[0].url);

        };
        fetchProduct();
    }, [prodId]);

    if (!product) return null;

    return (
        <div className='product-container'>
            <div className='main-image'>
                <img src={image} alt='Product' className='product-image' />
            </div>
            <div className='product-description'>
                <h1 className='product-title description-title'>{product.title}</h1>
                <p className='description'>{product.description}</p>
                <div>
                    <h6>Seleccioná color:</h6>
                    <div className='colors-description'>
                        {product.images.map((image, index) => (
                            <div className='colordot-container'>
                                <p>{image.colorName}</p>
                                <button
                                    key={index}
                                    style={{ backgroundColor: image.color }}
                                    className='color-dot'
                                    onClick={() => setImage(image.url)} >
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h6>Capacidad:</h6>
                    <div className='desciption-capacity'>
                        <p>{product.capacity}</p>
                    </div>
                </div>
                <div className='add-cart-container'>
                    <p className='description-price'>$ {product.price}</p>
                    <button className='card-btn btn-add-cart'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};
