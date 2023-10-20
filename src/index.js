import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React, { createContext, useState } from "react";
// import { sneakerData } from "../data";
// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= sneakerData.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };
// const [cartItems, setCartItems] = useState(getDefaultCart());
// const addToCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
// };
// const removeFromCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// };
// const contextValue = { cartItems, removeFromCart, addToCart };
// return (
//   <ShopContext.Provider value={contextValue}>
//     {props.children}
//   </ShopContext.Provider>
// );