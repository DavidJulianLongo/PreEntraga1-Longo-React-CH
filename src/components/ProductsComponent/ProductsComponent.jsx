import { useState, useEffect } from 'react';
import { CardComponent } from './cards/CardComponent';

export const ProductsComponent= () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsList = async () => {
            const response = await fetch('/data/productsData.json');
            const data = await response.json();
            setProducts(data);
        };
        productsList();
    }, []);

    return (
        <>
            <h1>products</h1>
            <div className="product-list">
                {products.map((product, id) => (
                    <CardComponent key={id} product={product} />
                ))}
            </div>
        </>
    );
};