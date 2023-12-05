import React from "react";
import Card from "../components/Card";
import Order from "./Order";
import Eventdetails from "./Eventdetails";
const Home = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      <Card />
      <Order />
      <Eventdetails />
    </div>
  );
};

export default Home;
