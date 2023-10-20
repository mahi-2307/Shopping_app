import React from "react";
import "./About.scss";
function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <div className="container">
        <div className="left">
          <p>
            As a community-first sneaker and streetwear boutique in India, we
            aim to be zeitgeists. With our culture-to-commerce approach, we
            endeavour to be at the forefront of movements rooted in music, art,
            fashion and more. Through our platform and reach, we champion
            inclusivity, individuality and creative expression. Collaborating
            with creators from all over India and across the world, we create
            impactful stories and editorial content.
          </p><br/>
          <p>The design of our apparel collections pays respect to the culture we come from. This collision of tradition and contemporary silhouettes speaks to our intention of being a streetwear brand from India - connected to our roots, relevant in the now, but creating the future.</p>
        </div>
        <div className="right">
            <img src="https://assets.gqindia.com/photos/620e52c018140d747a9b0a2a/16:9/w_2560%2Cc_limit/Lead-Image.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
