import React, { useContext } from "react";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import {BasketItem} from "./basket-item";
import "./basket.css";
//we use this hook to navigate back to the shopping page when we click on continue shopping 


export const Basket = () => {

  const { basketItems} = useContext(ShopContext);


  return (
    <div className="basket">
      <div>
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

      <div className="checkout flex sm:flex-row flex-col justify-center items-center mt-10">
        <button className="btn mr-4">Continue Shopping</button>
        <button className="btn">Checkout</button>
      </div>
     
    </div>
  )
}