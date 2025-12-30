/**
 * Example of using useReducer to manage state for data fetching.
 * The reducer handles three actions: FETCH_START, FETCH_SUCCESS, and FETCH_ERROR.
 * The component fetches data from an API and updates the state accordingly.
 */

import { useReducer, useEffect } from "react";

const api = "https://...";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, data: [], error: "" };

    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: "" };

    case "FETCH_ERROR":
      return { loading: false, data: [], error: "Error fetching data" };

    default:
      return state;
  }
}

export default function UseReducer4() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch(api)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch(() => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <ul>
      {state.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
