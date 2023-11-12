import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import "./navbar.css";

function NavBar() {
  return (
    <header className="navbar-container">
      <img className="logo" src={logo} alt="logo de la marca" />
      <ul className="menu-container">
        <li>Buzos</li>
        <li>Camperas</li>
        <li>Remeras</li>
        <li>Pantalones</li>
        <li>Zapatillas</li>
      </ul>
      <CartWidget />
    </header>
  );
}

export default NavBar;
