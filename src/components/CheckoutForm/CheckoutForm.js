import { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   const handleConfirm = (event) => {
      event.preventDefault();

      const userData = {
         name,
         phone,
         email,
      };
      onConfirm(userData);
   };
   return (
      <div className="container">
         <form onSubmit={handleConfirm} className="form">
            <label htmlFor="name" className="label">
               Nombre:
               <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
               />
            </label>
            <label htmlFor="phone" className="label">
               Celular:
               <input
                  className="input"
                  type="text"
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
               />
            </label>
            <label htmlFor="email" className="label">
               E-mail:
               <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
               />
            </label>
            <div className="label">
               <button
                  href="../Checkout/Checkout.js"
                  type="submit"
                  className="button">
                  Crear Orden
               </button>
            </div>
         </form>
      </div>
   );
};

export default CheckoutForm;
