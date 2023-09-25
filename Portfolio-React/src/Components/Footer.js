import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> Dhatrak Phata,</p>
              <p>Nashik, 422003</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +919321390415
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kajalnikam@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>This is me Kajal Nikam. A Front End Developer . I Enjoy Discussing new Projects and Design challenges.</p>
          <div className="social">
            <FaFacebook  size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
               <FaInstagram  size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
               <FaLinkedin size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
