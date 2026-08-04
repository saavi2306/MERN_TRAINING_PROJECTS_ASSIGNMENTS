import React from "react";
import "./RightCard.css";
import img from "./img.jpeg";

function RightCard() {
  return (
    <div className="card">
      <img src={img} alt="Profile" className="img" />

      <div className="imgText">
        <span>Open to projects</span>
      </div>
    </div>
  );
}

export default RightCard;