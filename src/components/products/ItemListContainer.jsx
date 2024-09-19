import { ItemList } from './itemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {
    return (
        <>
            <ItemList />
        </>
    )
};



// import './ItemListContainer.css';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { CardComponent } from './cards/CardComponent';
// import { BannerComponent } from '../BannerHome/BannerComponent';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

// export const ItemListContainer = () => {
//     const [products, setProducts] = useState([]);
//     const { model } = useParams();

//     useEffect(() => {
//         const db = getFirestore();
//         const productsCollection = collection(db, 'productos');

//         let getProducts;
//         if (model){
//             getProducts = query(productsCollection, where('model', '==', model));
//         }else{
//             getProducts = productsCollection;
//         }

//         getDocs(getProducts).then((snapshot) =>{
//             const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//             setProducts(products);
//         })
//     }, [model]);

//     return (
//         <main>
//             <BannerComponent />
//             <div className="products-container">
//                 {products.map((product) => (
//                     <CardComponent key={product.id} product={product} />
//                 ))}
//             </div>
//         </main>
//     );
// };