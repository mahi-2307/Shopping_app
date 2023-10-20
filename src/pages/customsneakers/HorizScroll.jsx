import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { customData } from "../../customData";
import "./HorizScroll.scss";
function HorizScroll() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
  }, []);

  return (
    <div className="app">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 , left : -width}}
          className="inner-carousel"
        >
          {customData.map((data) => (
            <motion.div className="item">
              <img src={data.img} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HorizScroll;
