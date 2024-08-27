import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardComponent } from './cards/CardComponent';

export const ProductsComponent= () => {
    const {model} = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const productsList = async () => {
            const response = await fetch('/data/products.json');
            const data = await response.json();
            setProducts(data);
        };
        productsList();
    }, []);

    useEffect(() => {
        //normalizedModel reemplaza los '-' de las url de CardComponent, para que se aplique el filtro
        const normalizedModel = model.toLowerCase().replace(/-/g, ' ');
        const filter = products.filter(prod => prod.title.toLowerCase().includes(normalizedModel));
    
        setFilteredProducts(filter)
    },[products, model])


    return (
        <>
            <h1>products</h1>
            <div className="product-list">
                {filteredProducts.map((product, id) => (
                    <CardComponent key={id} product={product} />
                ))}
            </div>
        </>
    );
};