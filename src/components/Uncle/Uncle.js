import React, { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Uncle = ({ house }) => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h1>Uncle</h1>
      <p>House: {house}</p>
      <p>
        <small>Money: {money}</small>
      </p>
    </div>
  );
};

export default Uncle;
