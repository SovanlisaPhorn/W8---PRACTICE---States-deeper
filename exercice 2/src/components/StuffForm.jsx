import React from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStuff = {
      name: name.trim(),
      price: parseFloat(price),
    };

    onAddStuff(newStuff);

    // Reset form
    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter stuff name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter stuff price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
