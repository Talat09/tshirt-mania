import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";
const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h1>Special</h1>
      <p>
        <small>Gift: {house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Special;
