import React, { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const [lot, setLot] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let lotValue = parseInt(lot);
    setCount((prev) => prev + lotValue);
  };
  return (
    <div>
      <h1>Current Count: {count}</h1>

      <button
        className="btn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>

      <h3>Add a lot</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={lot}
          onChange={(e) => setLot(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
        >
          Add it
        </button>
      </form>
    </div>
  );
}
