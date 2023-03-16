//useContext is a hook that comes with React
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, price, imageSrc, imageAlt } = props.data;
  const { addToBasket, basketItems } = useContext(ShopContext);

  const basketItemAmount = basketItems[id];
  return (
    <div className="product">
      <img src={imageSrc} alt={imageAlt} />
      <div className="description">
        <p> 
          <b>{name}</b> 
        </p>
        <p>
        {price}
        </p>
      </div>
      <button className="addToBasketBtn" onClick={() => addToBasket(id)}>
        {/* Display basketItemAmount only if basketItemAmount is greater than 0 */}
        Add to Basket {basketItemAmount > 0 && <> ({basketItemAmount})</>}
      </button>
    </div>
  )
}