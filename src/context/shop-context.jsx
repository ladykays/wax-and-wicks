import React, {createContext, useState } from "react";
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

export const ShopContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState(getDefaultBasket());

  //Add product to basket
  const addToBasket = (productId) => {
    setBasketItems((prevBasket) => ({...prevBasket, [productId]: prevBasket[productId] + 1}))
  }

  // 
  const contextValue = {basketItems, addToBasket}
  //Here we define state and everything related to logic in the project
  console.log(basketItems);
  return (
    
    //This keeps track of all the data and organise the logic inside of the ShopContext component
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
