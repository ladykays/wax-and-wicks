import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar shadow-lg">
      <div className="navbarItems flex items-center justify-between xl:max-w-7xl xl:mx-auto  text-amber-900 max-w-full px-[8%]">
        <div className="logo ">
          <h1 class="font-normal">
            <a href="/" className="text-3xl">Wax & Wicks</a>
          </h1>
        </div>
        <div className="menu lg:hidden block h-6 w-6 cursor-pointer">
          <i class="fa-solid fa-bars"></i>
        </div>
        <nav className="links hidden md:flex items-center space-x-10 w-auto">
          <Link to="/" className="link"> Home </Link>
          <Link to="/shop" className="link"> Shop </Link>
          <Link to="/contact" className="link"> Contact </Link>
        </nav>
        <div className="links">
          <Link to="/basket" className="link basketLink">
            <i class="fa-solid fa-basket-shopping basketIcon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};