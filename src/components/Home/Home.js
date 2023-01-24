import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (shirt) => {
    const exitsItem = cart.find((item) => item._id === shirt._id);
    if (exitsItem) {
      alert("already added");
    } else {
      const newCart = [...cart, shirt];
      setCart(newCart);
      alert("successful");
    }
  };
  const handleRemoveFromCart = (shirt) => {
    const remaining = cart.filter((item) => item._id !== shirt._id);
    setCart(remaining);
  };
  return (
    <div className="container">
      <div className="shirt-container">
        {shirts.map((shirt) => (
          <Tshirt
            key={shirt._id}
            shirt={shirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>

      <div className="order-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
