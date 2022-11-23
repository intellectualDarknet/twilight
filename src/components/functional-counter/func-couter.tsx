import React, { useState } from "react";
import "./func-counter.scss";

function FuncCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="funccounter">
      <span className="funccounter__value">{counter}</span>
      <button className="funccounter__button"onClick={() => setCounter((prev) => ++prev)}>Increment</button>
      <button className="funccounter__button"onClick={() => setCounter((prev) => --prev)}>Decrement</button>
    </div>
  );
}

export default FuncCounter;
