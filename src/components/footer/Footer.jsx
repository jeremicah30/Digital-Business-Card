import React from "react";
import "./footer.scss";

import twitter from "../../image/twitter.png";
import facebook from "../../image/facebook.webp";
import instagram from "../../image/instagram.png";
import github from "../../image/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={twitter} alt="Twitter Icon" />
      <img src={facebook} alt="Facebook Icon" />
      <img src={instagram} alt="Instagram Icon" />
      <img src={github} alt="Github Icon" />
    </div>
  );
};

export default Footer;
