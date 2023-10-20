import React, { useContext } from "react";
import "./CartItem.scss";
import { ShopContext } from "../../context/ContextShop";
const CartItem = (props) => {
  const { cartItems, removeFromCart, addToCart, deleteFromCart } =
    useContext(ShopContext);
  const { id, name, img, price } = props.data;

  return (
    <div className="cart-item">
      <img src={img} alt="" />
      <div className="details">
        <p id="name">{name}</p>
        <div className="quantity">
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          {cartItems[id]}
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
        <div className="price">
          <p>Rs.{cartItems[id] * price}</p>
          <button
            onClick={() => {
              deleteFromCart(id);
            }}
          >
            Remove
          </button>
        </div>
    </div>
  );
};
export default CartItem;
