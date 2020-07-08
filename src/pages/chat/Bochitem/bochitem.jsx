import React from "react";
import "./bochitem.css";
import bochAvatar from "../../../assets/imagenes/animation_200_kc6bqmjt.gif";

const Bochitem = ({text}) => {
  return (
    <div className="bocha-item-container">
      <img src={bochAvatar} alt="bocha-avatar" className="bocha-avatar" />
      
      <div className="bocha-item-message">
      {text.map((t, index)=>
        <label> {t} </label>
        )}
      </div>
      
     
    </div>
  );
};

export default Bochitem;
