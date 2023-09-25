import { Link } from "react-router-dom";
import "./AboutContent.css";
import react1 from "../assets/imges/react1.jpg";


import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm A passionate Frontend Developer. I Create responsive secure
          websites for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" />
          </div>
        

        <div className="img-stack bottom">
          <img src={react1} className="img" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutContent;
