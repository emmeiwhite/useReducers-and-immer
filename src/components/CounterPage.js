import React, { useReducer } from "react";
// import FormLot from "./FormLot";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const LOT = "LOT";
const LOT_SUMUP = "LOT_SUMUP";

const defaultState = {
  count: 10,
  lot: 0,
};

const reducer = (state, action) => {
  /*
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === LOT) {
    return { ...state, lot: action.payload };
  }

  if (action.type === LOT_SUMUP) {
    return { ...state, count: state.count + state.lot };
  }
   return state;
  */

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case LOT:
      console.log("LOT");
      return { ...state, lot: action.payload };

    case LOT_SUMUP:
      return { ...state, count: state.count + state.lot };

    default:
      return state;
  }
};

export default function CounterPage() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    let valueToAdd = parseInt(e.target.value) || 0; //To avoid NaN with empty string

    console.log("OnChange");
    dispatch({
      type: LOT,
      payload: valueToAdd || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.lot) return;
    // addMore(parseFloat(state.lot));

    dispatch({
      type: LOT_SUMUP,
    });
  };

  return (
    <div>
      <h1>Current Count: {state.count}</h1>

      <button
        className="btn"
        // onClick={() => setCount((prev) => prev + 1)}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn"
        // onClick={() => setCount((prev) => prev - 1)}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      {/* <h3>Add a lot</h3> */}

      {/* Keeping form here means whenever we type anything in the form controlled field, our whole app will re-render */}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={state.lot}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="btn"
        >
          Add it
        </button>
      </form>

      {/* Lowering the state for less re-renders */}
      {/* <FormLot
        addMore={addMore}
      /> */}
    </div>
  );
}
