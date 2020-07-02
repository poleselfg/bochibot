import React from "react";
import "./label.css";

const Label = ({ mensaje }) => {
  return (
    <div className="labelContainer">
      <label className="label">{mensaje}</label>;
    </div>
  );
};

export default Label;
