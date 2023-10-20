import React, { createContext, useState } from "react";
import { sneakerData } from "../data";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= sneakerData.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ContextShopProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cart,setCart] = useState(false)
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const changeCartIcon = () =>{
      setCart(!cart)
      return cart;
  }
  const totalCartItems = () =>{
    let sum=0;
    for (const item in cartItems){
      sum = cartItems[item];
    }
    console.log(sum);
    return sum;
  }
  const getTotalCartAmout = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = sneakerData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemPrice.price;
      }
    }
    return totalAmount;
  };
  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmout,
    deleteFromCart
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
