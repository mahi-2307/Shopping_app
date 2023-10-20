import React, { useContext } from "react";
import "./Cart.scss";
import { sneakerData } from "../../data";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ContextShop";
import CartItem from "../cartItem/CartItem";
function Cart() {
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmout();
  console.log(totalAmount);
  if (totalAmount === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty</p>
        <div className="buttons">
          <button className="checkout">
            Checkout <span>Subtotal: RS.{totalAmount}</span>
          </button>
          <button className="continue-shopping">
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="cart">
      <div className="whole-cart">
        <div className="cart-items">
          <h1>Your cart items</h1>
          {sneakerData.map((data, key) => {
            if (cartItems[data.id] !== 0) {
              return <CartItem key={data.id} data={data} />;
            }
          })}

          <div className="buttons">
            <button className="checkout">
              Checkout <span>Subtotal: RS.{totalAmount}</span>
            </button>
            <button className="continue-shopping">
              <Link to="/">Continue shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
