import React, { useContext, useState } from "react";
import "./Navbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll"; // Rename react-scroll Link as ScrollLink
import { Link as RouterLink } from "react-router-dom"; // Rename react-router Link as RouterLink
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const toggleMobNav = () => {
    setMobNav(!mobNav);
  };
  return (
    <section className="navbar">
      <div className="container">
        <div className="top">
          <div className="left">
            <RouterLink to="/">
              <p>SNEAKerHEAD</p>
            </RouterLink>
          </div>
          <div className="center">
            <RouterLink to="/allItems">PRODUCTS</RouterLink>
            <RouterLink to="/about">ABOUT</RouterLink>
            <RouterLink to="/contact">CONTACT</RouterLink>
          </div>
          <div className="right">
            <PersonIcon className="signin" />

            <RouterLink to="/cart">
              <ShoppingBagIcon className="icon" />
            </RouterLink>
            <div className="mobNav" onClick={toggleMobNav}>
              <MenuIcon className="icon" />
            </div>
          </div>
        </div>
        <div className={`mobNavMenu ${mobNav ? "open" : ""}`}>
          <button className="close" onClick={toggleMobNav}>
            X
          </button>
          {mobNav && (
            <div className="mobCenter">
              <RouterLink to="/">HOME</RouterLink>
              <RouterLink to="/allItems" onClick={toggleMobNav}>
                PRODUCTS
              </RouterLink>
              <RouterLink to="/about" onClick={toggleMobNav}>
                ABOUT
              </RouterLink>
              <RouterLink to="/contact" onClick={toggleMobNav}>
                CONTACT
              </RouterLink>
              <RouterLink>SIGN IN</RouterLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
