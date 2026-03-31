import React from "react";

export default function OrderCard({ product, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <button 
          className="order-button" 
          onClick={onDecrease} 
          disabled={quantity === 0} // disable when 0
          style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : "#9cc54b" }}
        >
          -
        </button>

        <h4>{quantity}</h4>

        <button className="order-button" onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
