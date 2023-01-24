import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h1>Myself</h1>
      <p>House: {house}</p>
      <section className="flex">
        <Special></Special>
      </section>
    </div>
  );
};

export default Myself;
