import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";
export const RingContext = createContext("Matir Ring");
export const MoneyContext = createContext(555);
const GrandPa = () => {
  //   const house = 7;
  //   const ring = "diamond ring";
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h1>GrandPaa!!</h1>
          <section className="flex">
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default GrandPa;
