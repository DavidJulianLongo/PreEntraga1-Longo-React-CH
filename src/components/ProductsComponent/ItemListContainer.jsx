import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardComponent } from './cards/CardComponent';
import { BannerComponent } from '../BannerHome/BannerComponent';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const productsList = async () => {
            const response = await fetch('/data/cardsProducts.json');
            const data = await response.json();
        
            if (id) {
                const filtered = data.filter(prod => prod.modelId === id);
                setProducts(filtered);
            } else {
                setProducts(data);
            }
        };
        productsList();
    }, [id]);

    return (
        <main>
            <BannerComponent />
            <div className="products-container">
                {products.map((product) => (
                    <CardComponent key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};