import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/databaseConfig';
import { query, collection, getDocs, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   const { categoryId } = useParams();

   useEffect(() => {
      setLoading(true);

      const collectionRef = categoryId
         ? query(
              collection(db, 'products'),
              where('category', '==', categoryId)
           )
         : collection(db, 'products');

      setTimeout(() => {
         getDocs(collectionRef)
            .then((response) => {
               const productsAdapted = response.docs.map((doc) => {
                  const data = doc.data();
                  return { id: doc.id, ...data };
               });
               setProducts(productsAdapted);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setLoading(false);
            });
      }, 500);
   }, [categoryId]);

   return (
      <div>
         <div>
            <h1>{greeting}</h1>
         </div>
         {loading ? (
            <div className="itemDetailContainer">
               <div className="half-circle-spinner">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
               </div>
            </div>
         ) : (
            <div className="itemListContainer">
               <ItemList products={products} />
            </div>
         )}
      </div>
   );
};

export default ItemListContainer;
