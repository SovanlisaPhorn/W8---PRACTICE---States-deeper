import React from "react";

export default function StuffCard({ name, price }) {
  return (
    <div className="stuff">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
