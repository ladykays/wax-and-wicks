import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-6 text-amber-900 bg-orange-50">
      <div className="logo">
        <h1 class="font-normal">
          <a href="/" className="text-3xl">Wax & Wicks</a>
        </h1>
      </div>
      <div className="links">
        <Link to="/" className="link mr-8 hover:text-amber-600"> Home </Link>
        <Link to="/shop" className="link mr-8 hover:text-amber-600"> Shop </Link>
        <Link to="/contact" className="link hover:text-amber-600"> Contact </Link>
      </div>
      <div className="links">
        <Link to="/basket" className="link hover:text-amber-600">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};