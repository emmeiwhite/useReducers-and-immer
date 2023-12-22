import React, { useState } from "react";
import FormLot from "./FormLot";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const addMore = (lotValue) => {
    setCount(count + lotValue);
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

      {/* <h3>Add a lot</h3> */}

      {/* Keeping form here means whenever we type anything in the form controlled field, our whole app will re-render */}
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      {/* Lowering the state for less re-renders */}
      <FormLot addMore={addMore} />
    </div>
  );
}
