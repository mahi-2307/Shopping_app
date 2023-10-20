import React, { useRef } from "react";
import { sneakerData } from "../../data";
import "./AllItems.scss"
import ItemCard from "../../components/Item/ItemCard";
import { useParams } from "react-router-dom";
function Allitems() {
  const {allItems} = useParams();
  return (
    <div className="allItems">
      <p id="route">home &gt; All Items</p>
      <h1>All Products</h1>
      <div className="offer">
        <p>Get up to 10% off on all products.</p>
      </div>
      <div className="sneakerSection">
        {sneakerData.map((data) => (
          <ItemCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Allitems;
