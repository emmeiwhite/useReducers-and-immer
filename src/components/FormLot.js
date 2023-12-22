import React, { useState } from "react";

export default function FormLot({ addMore }) {
  const [lot, setLot] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lot) return;
    addMore(parseFloat(lot));
    setLot(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={lot || ""}
        onChange={(e) => setLot(e.target.value || 0)}
      />
      <button
        type="submit"
        className="btn"
      >
        Add it
      </button>
    </form>
  );
}
