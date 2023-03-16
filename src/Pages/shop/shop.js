import React from "react";
//import the products array
import { products } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
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
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">
                Indulge in the warmth and comfort of Wax and Wicks.
              </h2>
              <h4 className="mb-6 text-xl font-semibold">
                Here you will find a range of hand-poured candles made with care and love
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="products">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Check out our current candle range below
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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

