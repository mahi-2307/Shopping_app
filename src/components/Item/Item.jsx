import React from "react";
import { sneakerData } from "../../data";
import "./Item.scss";

import ItemCard from "./ItemCard";

function Item() {
  return (
    <section className="sneakerSection">
      {sneakerData.slice(0,4).map((data) => (
        <ItemCard data={data}/>
      ))}
    </section>
  );
}

export default Item;
