import React from "react";
import Lottie from "react-lottie";
import lottieBocha from "./18299-hipster-beard.json";
import "./Bocha.css";

const Bocha = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieBocha,
  };

  return (
    <div className="bochaContainer">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Bocha;
