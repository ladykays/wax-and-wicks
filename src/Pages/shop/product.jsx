//useContext is a hook that comes with React
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, price, imageSrc, imageAlt } = props.data;
  const { addToBasket, basketItems } = useContext(ShopContext);

  const basketItemAmount = basketItems[id];
  return (
    <div className="product group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={imageSrc} alt={imageAlt} /> </div>
      <div className="description">
        <h3 className="text-sm text-gray-700 mt-4 flex mt-4 flex justify-center"> 
          <b>{name} - {price}</b> 
        </h3>
      </div>
      <button className="addToBasketBtn ml-2 px-3 py-1 rounded-md bg-gray-800 text-white" onClick={() => addToBasket(id)}>
        {/* Display basketItemAmount only if basketItemAmount is greater than 0 */}
        Add to Basket {basketItemAmount > 0 && <> ({basketItemAmount})</>}
      </button>
    </div>
  )
}