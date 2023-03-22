import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { BasketItem } from "./basket-item";
import "./basket.css";

export const Basket = () => {
  const { basketItems, getTotalBasketAmt } = useContext(ShopContext);
  const totalAmt = getTotalBasketAmt();

  return (
    <div className="basket">
      <div className="title text-center mt-4">
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
        <div className="checkout flex sm:flex-row flex-col justify-center items-center mt-10 flex-wrap">
          <div>Total: £{totalAmt}</div>
          <Link to="/shop">
            <button className="btn mr-4 m1-2 px-3 py-1 rounded-md text-white">
              Continue Shopping
            </button>
          </Link>
          <Link to="/checkout">
            <button className="btn mr-4 m1-2 px-3 py-1 rounded-md text-white">
              Checkout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-normal text-gray-500">
            Your Shopping Basket is Empty
          </h2>
          <Link to="/shop">
            <button className="btn mr-4 m1-2 px-3 py-1 rounded-md text-white">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
