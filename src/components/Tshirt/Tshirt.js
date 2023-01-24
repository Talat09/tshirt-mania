import React from "react";
import "./Tshirt.css";
const Tshirt = ({ shirt, handleAddToCart }) => {
  const { name, picture, price } = shirt;
  return (
    <div className="shirt">
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(shirt)}>Add To Cart</button>
    </div>
  );
};

export default Tshirt;
