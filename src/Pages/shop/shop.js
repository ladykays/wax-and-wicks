import React from "react";
//import the products array
import { products } from "../../products";
import { Product } from "./product";
import "./shop.css"; 

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>My Shop</h1>
      </div>

      <div className="products">

        {/* Map through every element in the products array and grab the data from each of them */}
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};