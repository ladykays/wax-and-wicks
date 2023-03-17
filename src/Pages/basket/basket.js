import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { BasketItem } from "./basket-item";
import "./basket.css";


export const Basket = () => {

  const { basketItems, getTotalBasketAmt} = useContext(ShopContext);
  const totalAmt = getTotalBasketAmt();


  return (
    <div className="basket">
      <div className="title">
        <h1>Your Shopping Basket</h1>
      </div>
      <div className="basketItems">
        {products.map((product) => {
          /* If the basketItems object and the element with the product id is not = 0, then it means the product is in the basket */
          if (basketItems[product.id] !== 0) {
            return <BasketItem data={product} />;
          }
          return null; // explicitly return null if condition is not met  
          
        })}
      </div>

      {totalAmt > 0 ? (
        <div className="checkout flex sm:flex-row flex-col justify-center items-center mt-10">
          <div>Total: £{totalAmt}</div>
          <Link to="/shop">
            <button className="btn mr-4">Continue Shopping</button>
          </Link>
          <Link to="/checkout">
            <button className="btn">Checkout</button>
          </Link>
        </div>
      ) : (
        <h2>Your Shopping Basket is Empty</h2>
      )}    
    </div>
  )
}