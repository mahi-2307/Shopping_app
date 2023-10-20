import React from "react";
import HorizScroll from "./HorizScroll";
import "./Customsneakers.scss";
function Customsneakers() {
  return (
    <div className="custom">
      <img
        src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/bd208cd8-6f73-4628-9011-2033d7a0a420/image.png"
        alt=""
      />
      <div className="detail">
        <h1>WHATS YOUR THING</h1>
        <p>Have your shoes done by our expert</p>
        <button>CUSTOMIZE</button>
      </div>
      <HorizScroll />
    </div>
  );
}

export default Customsneakers;
