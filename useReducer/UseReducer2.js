/**
 * Demonstrates managing multiple related state variables using a single useReducer hook.
 * This approach helps in organizing state logic and handling complex state updates like object properties.
 */

import { useReducer } from "react";

export const UseReducer2 = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT1":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "DECREMENT1":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "INCREMENT2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "DECREMENT2":
        return { ...state, secondCounter: state.secondCounter - action.value };
      case "RESET1":
        return { ...state, firstCounter: initialState.firstCounter };
      case "RESET2":
        return { ...state, secondCounter: initialState.secondCounter };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column justify-center align-center gap-2 text-center">
      <h4>Counter 1 : {state.firstCounter}</h4>

      <div className="">
        {/* counter 1 */}
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT1", value: 1 })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT1", value: 1 })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "INCREMENT1", value: 5 })}>
            Increment 5
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT1", value: 5 })}>
            Decrement 5
          </button>
          <button onClick={() => dispatch({ type: "RESET1" })}>
            Reset Counter 1
          </button>
        </div>

        <h4>Counter 2 : {state.secondCounter}</h4>
        {/* counter 2 */}
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}>
            Increment Counter 2
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}>
            Decrement Counter 2
          </button>
          <button onClick={() => dispatch({ type: "RESET2" })}>
            Reset Counter 2
          </button>
        </div>

        <br />

        {/* reset all */}
        <button onClick={() => dispatch({ type: "RESET" })}>Reset all</button>
      </div>
    </div>
  );
};
