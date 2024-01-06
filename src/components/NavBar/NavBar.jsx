import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.jpg";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo de la marca" />
      </Link>

      <div className="menu-container">
        <NavLink
          to={`/category/remeras`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Remeras
        </NavLink>
        <NavLink
          to={`/category/zapatillas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Zapatillas
        </NavLink>
        <NavLink
          to={`/category/pantalones`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Pantalones
        </NavLink>
      </div>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </header>
  );
}

export default NavBar;
