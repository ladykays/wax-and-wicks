import React, { createContext, useState } from "react";
import { products } from "../products";

// Create a context which is a store which keeps track of states and functions that need to be accessed everywhere in the project
export const ShopContext = createContext(null);

//Function to get the array and create an empty object to represent an initial state of the basket items
const getDefaultBasket = () => {
  let basket = {};
  for (let i = 1; i < products.length + 1; i++) {
    basket[i] = 0;
  }
  return basket;
};

//Define state and everything related to logic in the project
export const ShopContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState(getDefaultBasket());

  //To get total amount for items in the shopping basket
  const getTotalBasketAmt = () => {
    let totalAmt = 0;
    for (const item in basketItems) {
      if (basketItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmt += basketItems[item] * itemInfo.price;
      }
    }
    return totalAmt.toFixed(2);
  };

  //Add product to basket
  const addToBasket = (productId) => {
    setBasketItems((prevBasket) => ({
      ...prevBasket,
      [productId]: prevBasket[productId] + 1,
    }));
  };

  //Remove item from basket
  const removeFromBasket = (itemId) => {
    setBasketItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //To add or remove an item manually using the input field
  const updateBasketItemCount = (newAmount, itemId) => {
    setBasketItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    basketItems,
    addToBasket,
    removeFromBasket,
    updateBasketItemCount,
    getTotalBasketAmt,
  };

  console.log(basketItems);
  return (
    //This keeps track of all the data and organise the logic inside of the ShopContext component
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
