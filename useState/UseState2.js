import { useState } from "react";
import { createRoot } from "react-dom/client";

function useState2() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    // What if we only want to update the color of our car?
    // We can use the JavaScript spread operator to help us.
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button onClick={updateColor}>update color</button>
    </>
  );
}
