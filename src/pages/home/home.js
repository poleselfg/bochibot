import React from "react";
import Bocha from "../home/components/bocha/Bocha";
import "./home.css";
import Label from "../components/label/label";

const Home = ({ history }) => {
  return (
    <div className="bochaContainer">
      <Bocha history={history} />
      <Label mensaje="Aloha" />
      <Label mensaje="Clickeame asi charlamos un rato!" />
    </div>
  );
};

export default Home;
