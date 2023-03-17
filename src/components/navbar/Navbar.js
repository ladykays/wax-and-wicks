import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { FiMenu } from "react-icons/fi";
import "./navbar.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar shadow-lg">
      <div className="navbarItems flex items-center justify-between xl:max-w-7xl xl:mx-auto  text-amber-900 max-w-full px-[8%] flex-wrap w-full">
        <div className="logo ">
          <h1 class="font-normal">
            <a href="/" className="text-3xl">Wax & Wicks</a>
          </h1>
        </div>
        <div className="menu lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        
        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto space-x-10 links`}>
          <div className="lg:flex lg:justify-between">
            <Link to="/" className="link"> Home </Link>
            <Link to="/shop" className="link"> Shop </Link>
            <Link to="/contact" className="link"> Contact </Link>
          </div>
          <div className="links lg:hidden">
            <Link to="/basket" className="link basketLink">
              <i class="fa-solid fa-basket-shopping basketIcon"></i>
            </Link>
          </div>
        </nav>
        
        <div className="links hidden lg:block">
          <Link to="/basket" className="link basketLink">
            <i class="fa-solid fa-basket-shopping basketIcon"></i>
          </Link>
        </div> 
      </div>
    </div>
  );
};