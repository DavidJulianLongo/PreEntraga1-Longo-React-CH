import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from '../../../context/CartContext';
import { ItemQuantitySelector } from "./itemQuantitySelector/ItemQuantitySelector";
import { AddItemButton } from "./addItemButton/AddItemButton";
import './ItemDetail.css';


export const ItemDetail = () => {
    const [product, setProduct] = useState({ images: [] });
    const [selectedProduct, setSelectedProduct] = useState();
    const [colorSelected, setColorSelected] = useState(false);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const [, , addItem] = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const db = getFirestore();
        const getProduct = doc(db, "productos", productId);

        setLoading(true);
        getDoc(getProduct).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() });
                setSelectedProduct(snapshot.data().images[0]);
            }
            setLoading(false);
        });
    }, [productId]);


    //selecciona el color del producto y cambia la imagen 
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


    //agrega el producto al carrito
    const handleAddCart = () => {
        addItem(
            {
                image: selectedProduct?.url,
                id: product.id,
                title: product.title,
                price: product.price,
                color: selectedProduct.colorName
            },
            quantity
        );
    };

    return (
        <>
            <main>
                {loading ? (
                    <div className="loading-message">Cargando...</div>
                ) : (
                    <div className='product-container'>
                        <div className='main-image'>
                            <img src={selectedProduct?.url} alt={product.title} className='product-image' />
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
                            <ItemQuantitySelector quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
                            <div className='add-cart-container'>
                                <p className='description-price'>$ {parseFloat(product.price).toLocaleString('es-ES')}</p>
                                <AddItemButton handleAddCart={handleAddCart} isDisabled={!colorSelected} />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};