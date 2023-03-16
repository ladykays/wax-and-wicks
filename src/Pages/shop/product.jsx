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
        <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="mt-4 flex justify-between">
      <div>
      <h3 className="text-sm text-gray-700">
          {name}
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
      <button className="addToBasketBtn ml-2 px-3 py-1 rounded-md text-white" onClick={() => addToBasket(id)}>
        {/* Display basketItemAmount only if basketItemAmount is greater than 0 */}
        Add to Basket {basketItemAmount > 0 && <> ({basketItemAmount})</>}
      </button>
    </div>
  )};
  




