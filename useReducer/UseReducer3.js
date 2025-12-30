/**
 *  Using multiple useReducer hooks in a single component doesn't affect their functionality.
 *  Each useReducer maintains its own state and dispatch function independently.
 */ 

import { useReducer } from "react";

export const UseReducer3 = () => {
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
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column justify-center align-center gap-2 text-center">
      {/* counter 1 */}
      <h4>Count: {count}</h4>

      <div className="">
        <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatch("RESET")}>Reset</button>
      </div>

      {/* counter 2 */}
      <h4>Count: {countTwo}</h4>

      <div className="">
        <button onClick={() => dispatchTwo("INCREMENT")}>Increment</button>
        <button onClick={() => dispatchTwo("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatchTwo("RESET")}>Reset</button>
      </div>
    </div>
  );
};
