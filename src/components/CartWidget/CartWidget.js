import carrito from './assets/carrito.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
   const { cart } = useContext(CartContext);
   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

   return (
      <Link
         to="/cart"
         className="cartWidget"
         style={{ display: cart.length > 0 ? 'block' : 'none' }}>
         <img className="rotate-center" src={carrito} alt="carrito" />
         {totalQuantity > 0 && (
            <span className="cartQuantity">{totalQuantity}</span>
         )}
      </Link>
   );
};

export default CartWidget;
