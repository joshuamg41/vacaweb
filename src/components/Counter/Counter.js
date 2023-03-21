import { React, useState } from "react";
import "./Counter.css";
export default function Counter({name}) {
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
    <div className="counter">
      <h5>{name}</h5>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
      <span className="counter__output"> {counter}</span>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
