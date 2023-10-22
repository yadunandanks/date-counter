import React from "react";
import { useState } from "react";

export default function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("october 18 2021");

  date.setDate(date.getDate() + count);

  function defineStep(e) {
    setStep(Number(e.target.value));
  }
  function inputDeclaration(e) {
    setCount(Number(e.target.value));
  }

  function inc() {
    setCount((count) => count + step);
  }
  function dec() {
    setCount((count) => count - step);
  }

  function reset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>- </button>
        <input value={count} onChange={inputDeclaration} />
        <button onClick={inc}>+</button>
      </div>
      <div>
        <p>{date.toDateString()}</p>
        <input type="reset" onClick={reset} />
      </div>
    </div>
  );
}
