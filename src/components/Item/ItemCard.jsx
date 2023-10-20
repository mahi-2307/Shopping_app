import React from 'react'
import { Link } from "react-router-dom";

function ItemCard(props) {
  const { id, name, img,  price } = props.data;

  return (
    <div className="itemCard" key={id}>
      <Link to={`/product/${id}/${name}`}>
        <img src={img} alt={name} />
        <div className="details">
          <p className="name">{name}</p>
          <p>Rs.{price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
