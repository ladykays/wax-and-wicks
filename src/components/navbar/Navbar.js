import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 class="font-normal">
          <a href="/" className="text-3xl">Wax & Wicks</a>
        </h1>
      </div>
      <div className="links">
        <Link to="/" className="link"> Home </Link>
        <Link to="/shop" className="link"> Shop </Link>
        <Link to="/contact" className="link"> Contact </Link>
      </div>
      <div className="links">
        <Link to="/basket" className="link">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};