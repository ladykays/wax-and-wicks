import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const BasketItem = (props) => {
  const {id, name, price, imageSrc, imageAlt} = props.data;
  const { basketItems, addToBasket, removeFromBasket } = useContext(ShopContext);


  return (
    <div className="basketItem">
      <img src={imageSrc} alt={imageAlt} />
      <div className="description">
        <p>
          <b> {name} </b>
        </p>
        <p>
          {price}
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromBasket(id)}> - </button>
          <input value={basketItems[id]} />
          <button onClick={() => addToBasket(id)}> + </button>
        </div>

      </div>
    </div>
  );
};
