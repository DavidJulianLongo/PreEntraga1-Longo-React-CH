import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [image, setImage] = useState();
    const { id } = useParams();

    useEffect(() => {
        const productsList = async () => {
            const response = await fetch('/data/cardsProducts.json');
            const data = await response.json();
            //busca los el producto segun su id
            const getProduct = data.find(prod => prod.id == id);
            setProduct(getProduct);
            setImage(getProduct.images[0].url);
        };
    productsList();
    }, [id]);

    if (!product) return null;

    return (
        <div className='product-container'>
            <div className='main-image'>
                <img src={image} alt='Product' className='product-image' />
            </div>
            <div className='product-description'>
                <h1 className='product-title description-title'>{product.title}</h1>
                <p className='description'>{product.description}</p>
                <div className='colors-container'>
                    <h6>Seleccioná color:</h6>
                    <div className='colors-description'>
                        {product.images.map((image, index) => (
                            <div className='colordot-container' key={index}>
                                <p>{image.colorName}</p>
                                <button
                                    style={{ backgroundColor: image.color }}
                                    className='color-dot'
                                    onClick={() => setImage(image.url)} >
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='capacity'>
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
