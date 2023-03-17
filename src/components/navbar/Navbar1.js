import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar shadow-lg">
      <div className="logo">
        <h1 class="font-normal">
          <a href="/" className="text-3xl">Wax & Wicks</a>
        </h1>
      </div>
      <div className="links hidden md:flex items-center space-x-10">
        <Link to="/" className="link"> Home </Link>
        <Link to="/shop" className="link"> Shop </Link>
        <Link to="/contact" className="link"> Contact </Link>
      </div>
      <div className="links">
        <Link to="/basket" className="link basketLink">
          <i class="fa-solid fa-basket-shopping basketIcon"></i>
        </Link>
      </div>
    </nav>
  );
};