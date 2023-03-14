


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import React from 'react';
import Navbar from '../Componants/navBar';
import Footer from '../Componants/footer'

const products = [
  {
    id: 1,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'red',
  },
  {
    id: 2,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'blue',
  },
  {
    id: 3,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'green',
  },
  {
    id: 4,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'yellow',
  },
  {
    id: 5,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'purple',
  },
  {
    id: 6,
    name: 'XXX candle',
    imageSrc: 'XXX',
    imageAlt: 'Photo of a XX',
    price: '£7.99',
    color: 'orange',
  },
];

export default function Shop() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Check out our candle range below
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
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
