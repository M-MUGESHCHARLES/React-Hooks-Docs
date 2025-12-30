/**
 *  Simple counter implementation using useReducer hook in React.
 */

import { useReducer } from "react";

export const UseReducer1 = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column justify-center align-center gap-2 text-center">
      <h4>Count: {count}</h4>

      <div className="">
        <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatch("RESET")}>Reset</button>
      </div>
    </div>
  );
};
