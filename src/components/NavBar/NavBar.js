import CartWidget from "../CartWidget/CartWidget"
import proyecto_logo from "./assets/proyecto_logo.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <a href="../App.js">
        <img className="logo" src={proyecto_logo} alt="logo de la página" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="../App.js">Inicio</a>
          </li>
          <li>
            <a href="../App.js">Productos</a>
          </li>
          <li>
            <a href="../App.js">Armá tu PC</a>
          </li>
          <li>
            <a href="../App.js">Ayuda</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
