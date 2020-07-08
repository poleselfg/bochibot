import React from "react";
import "./userItem.css";
import UserAvatar from "../../../assets/imagenes/animation_200_kc7ugccs.gif";

const UserItem = ({text}) => {
  return (
    <div className="user-item-container">
      <div className="user-item-message">
        <label> {text} </label>
      </div>
      <img src={UserAvatar} alt="user-avatar" className="user-avatar" />
    </div>
  );
};

export default UserItem;
