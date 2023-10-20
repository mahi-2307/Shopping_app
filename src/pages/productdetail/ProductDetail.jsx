import React, { useContext } from "react";
import "./productDetail.scss";
import { sneakerData } from "../../data";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ContextShop";
function ProductDetail() {
  let { productId } = useParams();
  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  const product = sneakerData.find((data) => data.id === parseInt(productId));

  if (!product) {
    return <p>No data found</p>;
  }

  return (
    <section className="productDetail">
      <div className="detail_container">
        <div className="route">
          <p>{`Home > ${product.name}`}</p>
        </div>
        <div className="about-product">
          <div className="image-gallery">
            <img src={product.img} alt="" />
          </div>
          <div className="product-details">
            <div className="p_n">
              <p id="name">{product.name}</p>
              <p id="price">Rs.{product.price}</p>
            </div>
            <select name="size" id="size">
              <option>Select Size</option>
              <option>UK 7</option>
              <option>UK 8</option>
              <option>UK 9</option>
              <option>UK 10</option>
            </select>
            <div className="quantity">
              <button
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                -
              </button>
              <p>{cartItems[product.id]}</p>
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                +
              </button>
            </div>
            <button className="toCart">Add to Cart</button>
            <button className="buynow">Buy Now</button>
            <p id="desc">{product.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
