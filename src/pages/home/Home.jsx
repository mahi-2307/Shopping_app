import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import HorizScroll from "../customsneakers/HorizScroll";

import Item from "../../components/Item/Item";
import banner from "../../assets/banner.jpg";
import { Link as ScrollLink } from "react-scroll"; // Rename react-scroll Link as ScrollLink
import { Link as RouterLink } from "react-router-dom"; // Rename react-router Link as RouterLink
import Customsneakers from "../customsneakers/Customsneakers";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>FIND THE EPIC STYLE</h1>
            <p>Grab the limited stock at 10% OFF</p>
          </div>
          <ScrollLink
            activeClass="active"
            to="sneakerSection"
            offset={-100}
            smooth={true}
          >
            <button>SHOP NOW</button>
          </ScrollLink>
        </div>
        <div className="right">
          <motion.img src={banner} alt=""/>
        </div>
      </div>
      <div className="sneakers">
        <h1>SNEAKERS</h1>
        <Item />
        <RouterLink to="/allItems">
          <button>GO TO ALL ITEMS</button>
        </RouterLink>
      </div>
      <div className="customSection">
        <h1>
          ADD YOUR MAGIC <br />
          TOUCH
        </h1>
        <Customsneakers />
      </div>
    </section>
  );
}

export default Home;
