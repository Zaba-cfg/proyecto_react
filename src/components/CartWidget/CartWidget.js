import cart from "./assets/cart.svg"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div>
      <img className="logoCarrito" src={cart} alt="carrito de compras" />0
    </div>
  )
}

export default CartWidget
