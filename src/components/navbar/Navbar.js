import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarItems">
        <div className="logo ">
          <h1 class="font-normal">
            <a href="/" className="text-3xl">
              Wax & Wicks
            </a>
          </h1>
        </div>
        <div className="menu" onClick={() => setOpen(!open)}>
          <i class="fa-solid fa-bars text-2xl"></i>
        </div>

        <nav className={`${open ? "block" : "hidden"} navLinks links`}>
          <div className="lg:flex lg:justify-between">
            <Link to="/" className="link">
              {" "}
              Home{" "}
            </Link>
            <Link to="/shop" className="link">
              {" "}
              Shop{" "}
            </Link>
            <Link to="/contact" className="link">
              {" "}
              Contact{" "}
            </Link>
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
