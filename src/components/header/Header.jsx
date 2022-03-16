import React from "react";
import "./header.scss";

import me from "../../image/me.jpg";
import { AboutMe, Buttons } from "../index";

const Header = () => {
  return (
    <div className="header">
      <div className="profile-img">
        <img src={me} alt="My Picture" />
      </div>

      <h1>Jeremicah Licup</h1>
      <h4>Frontend Developer</h4>
      <h6>
        <a href="#">licupjeremicah3245@gmail.com</a>
      </h6>

      <div className="second">
        <Buttons />
        <AboutMe />
      </div>
    </div>
  );
};

export default Header;
