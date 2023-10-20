import React from "react";
import "./Footer.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h1>MOST VIEWED</h1>
          <p>AIR JORDAN</p>
          <p>NIKE DUNK</p>
          <p>SPIDER-VERSE OG</p>
        </div>
        <div className="center">
          <h1>KNOW MORE</h1>
          <p>ABOUT</p>
          <p>STORE LOCATOR</p>
          <p>SHIPPING</p>
          <p>TRACK ORDER</p>
        </div>
        <div className="right">
          <h1>OUR RETAIL STORE</h1>
          <p>SNEAKHEAD,Jubilee Hills</p>
          <p>HYDERABAD,TELANGANA</p>
          <p>Phone: +91 9848325848</p>
          <p>info.sneakhead@gmail.com</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h1>FOLLOW US ON</h1>
          <div className="links-social">
          <FacebookIcon className="icon"/>
          <InstagramIcon className="icon"/>
          </div>
        </div>
        <div className="right">
          <h1>GET MORE UPDATES</h1>
          <input
            type="text"
            placeholder="Enter your email address"
          />
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
