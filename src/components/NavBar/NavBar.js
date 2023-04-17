import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import proyecto_logo from "./assets/proyecto_logo.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <img className="logo" src={proyecto_logo} alt="Logo de PCDROP" />
      </Link>
      <div className="categories">
        <NavLink
          to={`/category/procesadores`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Procesadores
        </NavLink>
        <NavLink
          to={`/category/motherboards`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Motherboards
        </NavLink>
        <NavLink
          to={`/category/placas de video`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Placas de Video
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
