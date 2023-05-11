import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div>
        <h1 className="title">No hay productos en el carrito.</h1>
        <Link to="/" className="option">
          Volver a inicio
        </Link>
      </div>
    )
  } else {
    return (
      <div className="cartList">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="buttonDelete">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="option">
          Checkout
        </Link>
      </div>
    )
  }
}

export default Cart
