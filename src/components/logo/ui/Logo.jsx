import React from "react";
import { image } from "../../../app/assets";
import "./index.css";
const Logo = ({ appearance = "" }) => {
  return (
    <div className={"logo-container" + appearance}>
      <div
        className={"logo-wrapper"}
      >
        <img src={image.logo} alt="" />
      </div>
    </div>
  );
};

export default Logo;
