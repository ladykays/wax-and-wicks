import React from "react";
import "./basket.css";
import { Link } from "react-router-dom";

export const Basket = () => {
  return (
    <div className="basket">
      <h1 className="mt-4 font-size: 20px">Your Shopping Basket</h1>

      <div className="checkout flex sm:flex-row flex-col justify-center items-center">
        <button className="btn mr-4">Continue Shopping</button>
        <Link to="/checkout">
          {" "}
          <button className="btn">Checkout</button>{" "}
        </Link>
      </div>
    </div>
  );
};
