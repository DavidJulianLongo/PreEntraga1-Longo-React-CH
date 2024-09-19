import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemComponent } from '../item/ItemComponent';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { model } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');

        let getProducts;
        if (model){
            getProducts = query(productsCollection, where('model', '==', model));
        }else{
            getProducts = productsCollection;
        }

        getDocs(getProducts).then((snapshot) =>{
            const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(products);
        })
    }, [model]);

    return (
        <main>
            <div className="products-container">
                {products.map((product) => (
                    <ItemComponent key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};