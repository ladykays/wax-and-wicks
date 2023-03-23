import React from "react";
//import the products array
import { products } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
          height: "300px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="hero-text-container">
            <div className="text-white">
              <h2 className="hero-text">
                Indulge in the warmth and comfort of Wax and Wicks.
              </h2>
              <h4 className="hand-made">
                Here you will find a range of hand-poured candles made with care
                and love
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="products-container">
          <div className="products">
            <h2 className="title">Check out our current candle range below</h2>
            <div className="stock">
              {/* Map through every element in the products array and grab the data from each of them */}
              {products.map((product) => (
                <Product data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
