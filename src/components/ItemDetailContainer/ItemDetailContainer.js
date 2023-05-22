import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/databaseConfig';

const ItemDetailContainer = () => {
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   const { itemId } = useParams();

   useEffect(() => {
      setLoading(true);

      const docRef = doc(db, 'products', itemId);

      setTimeout(() => {
         getDoc(docRef)
            .then((response) => {
               const data = response.data();
               const productsAdapted = { id: response.id, ...data };
               setProduct(productsAdapted);
            })
            .catch((error) => {
               console.error(error);
            })
            .finally(() => {
               setLoading(false);
            })
            .finally(() => {
               setLoading(false);
            });
      }, 500);
   }, [itemId]);

   return (
      <div className="itemDetailContainer">
         {loading ? (
            <div className="half-circle-spinner">
               <div className="circle circle-1"></div>
               <div className="circle circle-2"></div>
            </div>
         ) : (
            <ItemDetail {...product} />
         )}
      </div>
   );
};

export default ItemDetailContainer;
