import React from "react";
import { products } from "../../products";
import "./basket.css";

export const Basket = () => {

  return (
    <div className="basket">
      <h1 className="mt-4 font-size: 20px">Your Shopping Basket</h1>
      <div className="basket-items">
        
      </div>

      <div className="buttons-container">
        <button className="btn mr-4">Continue Shopping</button>
        <button className="btn">Checkout</button>
      </div>
    </div>
  )
}