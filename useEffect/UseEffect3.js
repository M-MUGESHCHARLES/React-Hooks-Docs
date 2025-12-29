import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function UseEffect3() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}> Increment </button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
