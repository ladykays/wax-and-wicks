import React from "react";


export const BasketItem = (props) => {
  const {name, price, imageSrc, imageAlt} = props.data;


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

      </div>
    </div>
  );
};
