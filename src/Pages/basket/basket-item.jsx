import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./basket.css"

export const BasketItem = (props) => {
  const { id, name, price, imageSrc, imageAlt } = props.data;
  const { basketItems, addToBasket, removeFromBasket, updateBasketItemCount } =
    useContext(ShopContext);

  return (
    <div className="basketItem grid gap-1 flex justify-center">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img className="image h-32 w-32 object-cover object-center lg:h-full lg:w-full" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="t-4 flex justify-between">
        <div>
        <p>
          <b className= "h3 text-md text-gray-700"> {name} </b>
        </p>
        <p className="text-sm font-medium text-gray-900">{price}</p>
        <div className="countHandler">
          <button className= "ml-2 w-13 rounded-md text-white mx-4 mb-4" onClick={() => removeFromBasket(id)}> - </button>
          <input
            value={basketItems[id]}
            onChange={(e) => updateBasketItemCount(Number(e.target.value), id)}
            className= "input-field"
          />
          <button className= "ml-2 w-13 rounded-md text-white mx-4 mb-4" onClick={() => addToBasket(id)}> + </button>
          </div>
          </div>
      </div>
    </div>
  );
};



