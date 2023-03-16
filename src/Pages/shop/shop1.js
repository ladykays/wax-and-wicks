import React from "react";
import { useState } from 'react';
import { products } from "../../products"; // import the products data

// module.exports = {
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//   ],
// }


export default function AddCandles() {
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setBasket((prevBasket) => [...prevBasket, product]);
  }

  function removeFromBasket(productId) {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  }

return (
  <>
    {/* <Navbar /> */}
    {/* Jumbotron */}
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1602523961358-f9f03dd557db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        height: "300px"
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Indulge in the warmth and comfort of Wax and Wicks.</h2>
            <h4 className="mb-6 text-xl font-semibold">Here you will find a range of hand-poured candles made with care and love</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Check out our current candle range below
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.color}
                  </p>
                  <button
                    onClick={() => addToBasket(product)}
                    className="ml-2 px-3 py-1 rounded-md bg-gray-800 text-white"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)};
