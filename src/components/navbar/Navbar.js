import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Wax & Wicks</div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/basket">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};