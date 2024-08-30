import './ProductsComponent.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardComponent } from './cards/CardComponent';


export const ProductsComponent= () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {model} = useParams();

    useEffect(() => {
        const productsList = async () => {
            const response = await fetch('/data/cardsProducts.json');
            const data = await response.json();
            setProducts(data);
        };
        productsList();
    }, []);

    useEffect(() => {
        const filter = products.filter(prod => prod.title.toLowerCase().includes(model));
        setFilteredProducts(filter)
    },[products, model])


    return (
        <>
            <h1>products</h1>
            <div className="products-container">
                {filteredProducts.map((product, index) => (
                    <CardComponent key={index} product={product} />
                ))}
            </div>
        </>
    );
};