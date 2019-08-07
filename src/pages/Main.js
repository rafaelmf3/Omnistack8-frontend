import React from "react";
import "./Main.css";

import logo from "../assets/logo.svg";
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
    </div>
  );
}
