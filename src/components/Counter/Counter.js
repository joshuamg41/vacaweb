import { React, useState } from "react";
import "./Counter.css";
export default function Counter({ name }) {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="counter card">
      <h5>{name}</h5>
      <form>

        <div className="btn__container">
          <button className="btn btn-light" onClick={increase} type="button" >+</button>
          <span className="counter__output"> {counter}</span>
          <button className="btn btn-light" onClick={decrease} type="button">-</button>
          <button className="btn btn-secondary" onClick={reset} type="button" >Reset</button>
        </div>
      </form>
    </div>
  );
}
