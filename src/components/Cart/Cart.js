import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please buy at least one item!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h1>Please take one for me!!</h1>
        <p>Take another one for you!!</p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }
  return (
    <div className="order">
      <h3 className={cart.length === 2 ? `orange` : "yellow"}>Order Summary</h3>
      <h4 className={`bold ${cart.length === 2 ? "blue" : "green"}`}>
        Added item: {cart.length}
      </h4>
      <div>
        {cart.map((shirt) => (
          <p key={shirt._id}>
            {shirt.name}
            <button onClick={() => handleRemoveFromCart(shirt)}>X</button>
          </p>
        ))}
        {message}
        {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino ro</p>}
      </div>
    </div>
  );
};

export default Cart;
