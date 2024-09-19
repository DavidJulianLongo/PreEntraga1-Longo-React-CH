import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [colorSelected, setColorSelected] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const [, , addItem] = useContext(CartContext);

    useEffect(() => {
        const productModel = async () => {
            const response = await fetch('/data/cardsProducts.json');
            const data = await response.json();
            const getProduct = data.find(prod => prod.id == id);
            setProduct(getProduct);
            setSelectedProduct(getProduct.images[0]);
        };
        productModel();
    }, [id]);

    if (!product) return null;


    const handleAddCart = () => {
        const addProduct = addItem(
            {
                id: product.id,
                title: product.title,
                price: product.price,
                color: selectedProduct.colorName,
            },
            quantity
        );
        console.log(addProduct);
    };

    const handleColorSelection = (image) => {
        setSelectedProduct(image);
        setColorSelected(true);
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const ButtonDisabled = !colorSelected;


    return (
        <main>
            <div className='product-container'>
                <div className='main-image'>
                    <img src={selectedProduct.url} alt='Product' className='product-image' />
                </div>
                <div className='product-description'>
                    <h1 className='product-title description-title'>{product.title}</h1>
                    <p className='description'>{product.description}</p>
                    <div className='colors-container'>
                        <h6>Seleccioná un color:</h6>
                        <div className='colors-description'>
                            {product.images.map((image, index) => (
                                <div className='colordot-container' key={index}>
                                    <p>{image.colorName}</p>
                                    <button
                                        style={{ backgroundColor: image.color }}
                                        className='color-dot'
                                        onClick={() => handleColorSelection(image)}
                                    >
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
                    <div className='quantity-container'>
                        <h6>Cantidad:</h6>
                        <div className='quantity-controls'>
                            <button onClick={handleDecrement} className='quantity-btn'>-</button>
                            <p className='quantity-value'>{quantity}</p>
                            <button onClick={handleIncrement} className='quantity-btn'>+</button>
                        </div>
                    </div>
                    <div className='add-cart-container'>
                        <p className='description-price'>$ {product.price}</p>
                        <button className={`card-btn btn-add-cart ${ButtonDisabled ? 'disable' : ''}`} onClick={handleAddCart} disabled={ButtonDisabled}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};