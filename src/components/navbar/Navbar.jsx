import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CategoryCard from "../categoryCard/CategoryCard";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div className="top">
          <div className="left">
            <p>Find store</p>
            <div className="search">
              <SearchIcon className="icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="center">
            <img src={logo} alt="logo of website" />
          </div>
          <div className="right">
            <p>Sign In</p>
          </div>
        </div>
        <div className="bottom">
          <div className="categories_list">
            <Link to="/">
                <p>Women</p>
              <div className= "category">
                <CategoryCard />
              </div>
            </Link>
            <Link to="/">Divided</Link>
            <Link to="/">Men</Link>
            <Link to="/">Baby</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
