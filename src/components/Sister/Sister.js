import React, { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Sister</h1>
      <p>House: {house}</p>
      <p>Money:{money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add Money</button>
    </div>
  );
};

export default Sister;
